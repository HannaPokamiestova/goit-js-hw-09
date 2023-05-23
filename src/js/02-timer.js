import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button[data-start]");
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      startBtn.disabled = true;
      alert("Please choose a date in the future");
      return;
    }
    startBtn.disabled = false;
    startBtn.addEventListener("click", onStartClick(selectedDates[0]));
  },
};

let timerId = null;

function onStartClick(selectedDate) {
  timerId = setInterval(() => {
 Maryna Makukhina, [22 мая 2023 г., 6:41:43 PM]:
...import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');

const refs = {
  hours: document.querySelector('[data-hours]'),
  days: document.querySelector('[data-days]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

startBtn.disabled = true;
startBtn.addEventListener('click', onStartClick);

let processDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDate]) {
    if (selectedDate <= Date.now()) {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
    processDate = selectedDate;
  },
};

let timerId = null;

function onStartClick() {
  if (!processDate) {
    return;
  }

  timerId = setInterval(() => {
    const differenceInTime = processDate - Date.now();
    if (differenceInTime < 1000) {
      clearInterval(timerId);
    }
    const data = convertMs(differenceInTime);
    printDate(data);
  }, 1000);
}

function printDate(data) {
  refs.hours.textContent = addLeadingZero(data.hours);
  refs.days.textContent = addLeadingZero(data.days);
  refs.minutes.textContent = addLeadingZero(data.minutes);
  refs.seconds.textContent = addLeadingZero(data.seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

Hanna Pokamiestova, [22 мая 2023 г., 6:42:30 PM]:
Добрий день. Я д...
