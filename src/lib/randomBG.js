const IMAGES = [
  'src/assets/background/background_01.jpeg',
  'src/assets/background/background_02.jpeg',
];

const IMG_NUMBER = IMAGES.length;

const getRandom = () => {
  return Math.floor(Math.random() * IMG_NUMBER);
};

const obj = document.getElementById('background');
const size = getRandom();

obj.style.background = `url(${IMAGES[size]})`;

console.log(IMAGES[size]);
