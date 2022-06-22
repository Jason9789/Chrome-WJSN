import '../App.css';
import React from 'react';
import TodoListBlock from './TodoListBlock';
import User from './User';
// import Weather from './Weather';

import img1 from '../assets/background/background_01.jpeg';
import img2 from '../assets/background/background_02.jpeg';
import img3 from '../assets/background/background_03.jpeg';
import img5 from '../assets/background/background_05.jpeg';
import img6 from '../assets/background/background_06.jpeg';
import img7 from '../assets/background/background_07.jpeg';

const backgroundArr = [img1, img2, img3, img5, img6, img7];
const randomIndex = Math.floor(Math.random() * backgroundArr.length);
const backgroundImg = backgroundArr[randomIndex];

function Main() {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg}) no-repeat`,
        backgroundSize: 'cover',
      }}
      className="background"
    >
      <div>
        {/* <Weather /> */}
        <User />
        <TodoListBlock />
      </div>
      <script src="./src/lib/randomBG.js" />
    </div>
  );
}

export default Main;
