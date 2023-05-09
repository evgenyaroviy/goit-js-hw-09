import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let timerId;
let endTime;
let dayNow = new Date();

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        endTime = selectedDates[0];
        const startTime = dayNow.getTime();
        if (startTime > endTime.getTime()) {
            buttonRef.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            buttonRef.disabled = false;
        }
    },
};

const inputRef = document.querySelector('input#datetime-picker');
const flatpickrInstance = flatpickr(inputRef, options);
const buttonRef = document.querySelector('button');
const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
buttonRef.disabled = true;

buttonRef.addEventListener('click', () => {
    timerId = setInterval(() => {
    dayNow = new Date();
    const startTime = dayNow.getTime();
    const endTimeMS = endTime.getTime();

    const timer = endTimeMS - startTime;
    const { days, hours, minutes, seconds } = convertMs(timer);
    refs.days.textContent = addLeadingZero(`${days}`);
    refs.hours.textContent = addLeadingZero(`${hours}`);
    refs.minutes.textContent = addLeadingZero(`${minutes}`);
    refs.seconds.textContent = addLeadingZero(`${seconds}`);
    if (timer < 0) {
        clearInterval(timerId);
        refs.days.textContent = '00';
        refs.hours.textContent = '00';
        refs.minutes.textContent = '00';
        refs.seconds.textContent = '00';
        buttonRef.disabled = true;
    }
}, 1000)
})


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


function addLeadingZero(value) {
    return value.padStart(2, 0);
} 

const timerStyle = document.querySelector('.timer');
timerStyle.style.display = 'flex';
timerStyle.style.gap = '20px';

const valueStyle = document.querySelectorAll('.value');
valueStyle.forEach((value) => {
    value.style.display = 'flex';
    value.style.alignItems = 'center';
    value.style.justifyContent = 'center';
    value.style.fontWeight = '400';
    value.style.fontSize = '50px';
    
})
const labelStyle = document.querySelectorAll('.label');
labelStyle.forEach((value) => {
    value.style.display = 'flex';
    value.style.fontWeight = '400';
    value.style.fontSize = '20px';
    value.style.textTransform = 'uppercase';
})
