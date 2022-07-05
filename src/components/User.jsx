import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../styles/User.scss';

function User() {
  // let timer = new Date();
  const [time, setTime] = useState(moment());
  const { userName } = window.localStorage;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let greetingText = '';

  // 인사 구분
  const hour = parseInt(time.format('HH'), 10);

  if (hour > 5 && hour < 11) {
    greetingText = '좋은 아침이에요.';
  } else if (hour >= 11 && hour < 14) {
    greetingText = '벌써 점심이에요!';
  } else if (hour >= 14 && hour < 17) {
    greetingText = '좋은 오후네요.';
  } else if (hour >= 17 && hour < 21) {
    greetingText = '좋은 저녁이에요.';
  } else if (hour >= 21 && hour < 23) {
    greetingText = '오늘 하루는 잘 마무리 하셨나요?';
  } else {
    greetingText = '오늘도 고생 많았어요.';
  }

  return (
    <div className="user-info">
      <h1>{time.format('HH : mm : ss')}</h1>
      <h3 className="user-name">
        {greetingText} {userName}님
      </h3>
    </div>
  );
}

export default User;
