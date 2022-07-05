import '../App.css';
import React from 'react';
import TodoListBlock from './TodoListBlock';
import User from './User';
// import Weather from './Weather';

import img1 from '../assets/background/background_01.jpeg';

const backgroundArr = [img1];
const randomIndex = Math.floor(Math.random() * backgroundArr.length);
const backgroundImg = backgroundArr[randomIndex];

function Main() {
  return (
    <div
      style={{
        background: `url(${backgroundImg})`,
      }}
      className="main-background"
    >
      <div className="main-info">
        {/* <Weather /> */}
        <User />
        <TodoListBlock />
      </div>
      <script src="./src/lib/randomBG.js" />
    </div>
  );
}

export default Main;
