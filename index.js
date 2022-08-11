const button = document.getElementById('js-btn');
const buttonReset = document.getElementById('js-btnReset');
const seconds = document.getElementById('js-second');
const minutes = document.getElementById('js-minute');
const hours = document.getElementById('js-hour');

let starT;
let activeBtn = false;

const baseTime = () => {
  if (localStorage.getItem('seconds')) {
    if (JSON.parse(localStorage.getItem('seconds')) < 10) {
      seconds.innerText = `0${JSON.parse(localStorage.getItem('seconds'))}`;
    } else {
      seconds.innerText = `${JSON.parse(localStorage.getItem('seconds'))}`;
    }
  }

  if (localStorage.getItem('minutes')) {
    if (JSON.parse(localStorage.getItem('minutes')) < 10) {
      minutes.innerText = `0${JSON.parse(localStorage.getItem('minutes'))}`;
    } else {
      minutes.innerText = `${JSON.parse(localStorage.getItem('minutes'))}`;
    }
  }

  if (localStorage.getItem('hours')) {
    if (JSON.parse(localStorage.getItem('hours')) < 10) {
      hours.innerText = `0${JSON.parse(localStorage.getItem('hours'))}`;
    } else {
      hours.innerText = `${JSON.parse(localStorage.getItem('hours'))}`;
    }
  }
};

let second = localStorage.getItem('seconds')
  ? JSON.parse(localStorage.getItem('seconds'))
  : 0;

let minute = localStorage.getItem('minutes')
  ? JSON.parse(localStorage.getItem('minutes'))
  : 0;

let hour = localStorage.getItem('hours')
  ? JSON.parse(localStorage.getItem('hours'))
  : 0;

baseTime();

const startHourTimer = () => {
  if (hours.textContent.charAt(0) === '0') {
    hours.innerText = ``;
    hour++;
    if (hour < 10) {
      localStorage.setItem('hours', hour);
      hours.innerText = `0${hour}`;
    }
  }

  if (hour > 9) {
    hours.innerText = ``;
    localStorage.setItem('hours', hour);
    hours.innerText = `${hour}`;
    hour++;
  }
};

const startMinuteTimer = () => {
  if (minutes.textContent.charAt(0) === '0') {
    minutes.innerText = ``;
    minute++;
    if (minute < 10) {
      localStorage.setItem('minutes', minute);
      minutes.innerText = `0${minute}`;
    }
  }

  if (minute === 60) {
    minute = 0;
    localStorage.setItem('minutes', minute);
    minutes.innerText = `00`;
    startHourTimer();
  }

  if (minute > 9) {
    minutes.innerText = ``;
    localStorage.setItem('minutes', minute);
    minutes.innerText = `${minute}`;
    minute++;
  }
};

const startSecondTimer = () => {
  if (seconds.textContent.charAt(0) === '0') {
    seconds.innerText = ``;
    second++;
    if (second < 10) {
      localStorage.setItem('seconds', second);
      seconds.innerText = `0${second}`;
    }
  }

  if (second === 60) {
    second = 0;
    localStorage.setItem('seconds', second);
    seconds.innerText = `00`;
    startMinuteTimer();
  }

  if (second > 9) {
    seconds.innerText = ``;
    localStorage.setItem('seconds', second);
    seconds.innerText = `${second}`;
    second++;
  }
};

const startTimer = () => {
  startSecondTimer();
};

button.addEventListener('click', () => {
  activeBtn = !activeBtn;
  if (activeBtn) {
    button.innerText = 'Stop';
    starT = setInterval(startTimer, 1000);
  } else {
    button.innerText = 'Start';
    clearInterval(starT);
  }
});

buttonReset.addEventListener('click', () => {
  seconds.innerText = '00';
  second = 0;
  localStorage.setItem('seconds', second);

  minutes.innerText = '00';
  minute = 0;
  localStorage.setItem('minutes', minute);

  hours.innerText = '00';
  hour = 0;
  localStorage.setItem('hours', hour);
});
