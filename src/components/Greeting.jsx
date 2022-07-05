import React, { useCallback, useState } from 'react';
import '../styles/Greeting.scss';

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
    <div className="greeting-background">
      <main className="main">
        <div className="user-name-title">당신의 이름을 알고 싶어요!</div>
        <form className="form-user" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-name"
            id="js-name-input"
            placeholder="이름을 입력하세요"
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
