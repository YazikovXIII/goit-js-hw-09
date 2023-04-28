function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  start.disabled = true;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
}

function onStop() {
  start.disabled = false;
  clearInterval(timerId);
//   document.body.style.backgroundColor = 'white';
}
