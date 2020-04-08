const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let colorInterval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = color;
};

refs.btnStart.addEventListener('click', handleClick);

function handleClick() {
  if (!colorInterval) {
    colorInterval = setInterval(() => randomColor(), 1000);
  }
}

refs.btnStop.addEventListener('click', handleStop);

function handleStop() {
  clearInterval(colorInterval);
  colorInterval = null;
}

