import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const counterInput = document.querySelector('#datetime-picker');
const counterDay = document.querySelector('[data-days]');
const counterHour = document.querySelector('[data-hours]');
const counterMinute = document.querySelector('[data-minutes]');
const counterSecond = document.querySelector('[data-seconds]');
const counterStart = document.querySelector('[data-start]');
const counterFrame = document.querySelector('.timer');
const counterField = document.querySelectorAll('.field');
const counterValue = document.querySelectorAll('.value');
const counterLabel = document.querySelectorAll('.label');
const currentDate = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadLine = selectedDates[0];
    if (deadLine <= options.defaultDate) {
      Notify.failure('Choose the date in the future');
    } else {
      counterStart.disabled = false;
    }
  },
};
let deadLine = 0;

counterStart.disabled = true;

Notify.info(`${currentDate}`);
flatpickr('#datetime-picker', options);

counterStart.addEventListener('click', startCounter);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startCounter() {
  counterStart.disabled = true;
  counterInput.disabled = true;
  const id = setInterval(() => {
    const now = new Date();
    const number = deadLine - now;
    const result = convertMs(number);
    counterDay.textContent = twoDigits(result.days);
    counterHour.textContent = twoDigits(result.hours);
    counterMinute.textContent = twoDigits(result.minutes);
    counterSecond.textContent = twoDigits(result.seconds);
    if (number <= 0) {
      counterDay.textContent = '00';
      counterHour.textContent = '00';
      counterMinute.textContent = '00';
      counterSecond.textContent = '00';
      counterInput.disabled = false;
      counterStart.disabled = false;
      clearInterval(id);
    }
  }, 1000);
}

function twoDigits(value) {
  return value.toString().padStart(2, 0);
}

counterFrame.style.display = 'flex';
counterField.forEach(field => {
  field.style.marginRight = '50px';
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.justifyСontent = 'center';
  field.style.alignItems = 'center';
});
counterValue.forEach(value => {
  value.style.fontSize = '100px';
});
counterLabel.forEach(label => {
  label.style.fontSize = '20px';
  label.style.fontWeight = '1px';
});
