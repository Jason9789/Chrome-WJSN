import '../App.css';
import React from 'react';
import TodoListBlock from './TodoListBlock';
import User from './User';
// import Weather from './Weather';

import img1 from '../assets/background/background_01.jpeg';
import img2 from '../assets/background/background_02.jpeg';
import img3 from '../assets/background/background_03.jpeg';
import img4 from '../assets/background/background_04.jpeg';
import img5 from '../assets/background/background_05.jpeg';
import img6 from '../assets/background/background_06.jpeg';

const backgroundArr = [img1, img2, img3, img4, img5, img6];
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
