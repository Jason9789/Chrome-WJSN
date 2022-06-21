import React, { useState, useEffect } from 'react';
import moment from 'moment';

const User = () => {
  let timer = null;
  const [time, setTime] = useState(moment());
  const userName = window.localStorage.userName;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let greetingText = '';

  // 인사 구분
  let hour = parseInt(time.format('HH'));

  if (5 < hour && hour < 11) {
    greetingText = '좋은 아침이에요.';
  } else if (11 <= hour && hour < 14) {
    greetingText = '벌써 점심이에요!';
  } else if (14 <= hour && hour < 17) {
    greetingText = '좋은 오후네요.';
  } else if (17 <= hour && hour < 21) {
    greetingText = '좋은 저녁이에요.';
  } else if (21 <= hour && hour < 23) {
    greetingText = '오늘 하루는 잘 마무리 하셨나요?';
  } else {
    greetingText = '오늘도 고생 많았어요.';
  }

  return (
    <div>
      <h1>
        {greetingText} {userName}님
      </h1>

      <div>{time.format('YYYY-MM-DD')}</div>
      <div>{time.format('HH : mm : ss')}</div>
    </div>
  );
};

export default User;
