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
    const differenceInTime = selectedDate - new Date();
    if (differenceInTime < 1000) {
      clearInterval(timerId);
    }
    const data = convertMs(differenceInTime);
    document.querySelector("[data-hours]").textContent = addLeadingZero(
      data.hours
    );
    document.querySelector("[data-days]").textContent = addLeadingZero(
      data.days
    );
    document.querySelector("[data-minutes]").textContent = addLeadingZero(
      data.minutes
    );
    document.querySelector("[data-seconds]").textContent = addLeadingZero(
      data.seconds
    );
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

flatpickr("input#datetime-picker", options);

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
