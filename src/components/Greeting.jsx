import React, { useCallback, useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  const onChange = useCallback((e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    setName(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    // localStorage에 저장
    if (!window.localStorage.userName) {
      // 저장된 유저가 없을 때
      const userName = name;
      window.localStorage.setItem('userName', userName);
    }

    setName('');
  }, [name]);

  return (
    <div className="whats-your-name__container" id="js-whats-your-container">
      <main className="whats-your-name">
        <span className="whats-your-name__text">
          당신의 이름을 알고 싶어요!
        </span>
        <form className="form" id="js-name-form" onSubmit={onSubmit}>
          <input
            type="text"
            className="input"
            id="js-name-input"
            value={name}
            autoComplete="off"
            onChange={onChange}
          />
        </form>
      </main>
    </div>
  );
}

export default Greeting;
