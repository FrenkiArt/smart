console.log('Hello from custom-js.js file');

/**
 * Эта функция выводит ширину вьюпорта тогда,
 * когда происходит изменение размера окна
 * @date 2021-02-09
 * @return {void}
 */

window.onresize = () => {
  setTimeout(() => {
    console.log(window.innerWidth);
  }, 1);
};

/* Загатовка для js в зависимости от ширины экрана */
if (window.matchMedia('(max-width: 640px)').matches) {
  // do functionality on screens smaller than 640px
} else {
  // Декстоп
}

/**
 * Счётчик времени
 * @param {*} dateEnd Дата конца счётчика
 */
function countdown(dateEnd) {
  // eslint-disable-next-line one-var
  let timer, days, hours, minutes, seconds;

  // 04/20/2021 06:00:07 PM - example of dateEnd;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    console.log('Видимо не удалось привести к числу дату окончания.');
    console.log('dateEnd is', dateEnd);
    make1DayCountDown();
    countdown(document.querySelector('.countdown').dataset.countdown);
    return;
  }

  // eslint-disable-next-line prefer-const
  timer = setInterval(calculate, 1000);

  /**
   * sdf
   */
  function calculate() {
    let dateStart = new Date();
    dateStart = new Date(
      dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds()
    );
    let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;
      hours = parseInt(timeRemaining / 3600);

      if (days > 0) {
        hours += days * 24;
      }

      timeRemaining = timeRemaining % 3600;
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;
      seconds = parseInt(timeRemaining);

      // document.getElementById('days').innerHTML = parseInt(days, 10);
      makeCountEl('#hours', ('0' + hours).slice(-2));
      makeCountEl('#minutes', ('0' + minutes).slice(-2));
      makeCountEl('#seconds', ('0' + seconds).slice(-2));
    } else {
      console.log('Время вышло');
      document.querySelector(
        '.countdown'
      ).innerHTML = `<div class="countdown__time-is-over">Started</div>`;
      clearTimeout(timer);
      return;
    }
  }

  function makeCountEl(selectorId, string) {
    document.querySelector(selectorId).innerHTML = `
      <div class="countdown__number">${string[0]}</div>
      <div class="countdown__number">${string[1]}</div>
    `;
  }

  /**
   * Завёл эту функцию, чтобы по умолчанию всегда
   * оставался 1 день до конца счётчика.
   */
  function make1DayCountDown() {
    let date = new Date(); // текущее время по UTC;
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    let tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);

    document.querySelector(
      '.countdown'
    ).dataset.countdown = tomorrow.toLocaleString('en-US', options);
    // console.log(date.toLocaleString('en-US', options));
  }
}

if (document.querySelector('.countdown')) {
  countdown(document.querySelector('.countdown').dataset.countdown);
}

/* Копирование ссылки */
if (document.querySelector('#btn-copy')) {
  document
    .querySelector('#btn-copy')
    .addEventListener('click', copyToClipboard);
}

function copyToClipboard(e) {
  const copyEl = document.querySelector('#copy-element');
  navigator.clipboard
    .writeText(copyEl.textContent)
    .then(() => {
      console.log('Текст скопирован');
      console.log(copyEl.textContent);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
}
