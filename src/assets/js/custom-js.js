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
 * Работа с саб-меню в навигации, которых
 * теперь не видно из-за особенностей макета.
 */
if (document.querySelector('.submenu-parent')) {
  document.querySelectorAll('.submenu-parent').forEach((item) => {
    item.addEventListener('mouseenter', submenuOverHandler);
  });

  document.querySelectorAll('.submenu-parent').forEach((item) => {
    item.addEventListener('mouseleave', submenuOutHandler);
  });
}

function submenuOverHandler(e) {
  // console.log('over');

  const childSubmenu = e.target.querySelector('.submenu');
  const posLeft =
    e.target.getBoundingClientRect().left +
    e.target.getBoundingClientRect().width / 2;
  const posTop = e.target.getBoundingClientRect().bottom;

  childSubmenu.classList.add('fixed');
  childSubmenu.style.top = posTop + 'px';
  childSubmenu.style.left = posLeft + 'px';
}

function submenuOutHandler(e) {
  // console.log('out');

  const childSubmenu = e.target.querySelector('.submenu');

  childSubmenu.classList.remove('fixed');
  /*  setTimeout(() => {
    childSubmenu.style.top = 0 + 'px';
    childSubmenu.style.left = 0 + 'px';
  }, 300); */
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

/* Таббер обычный */
if (document.querySelector('.uni-toggler')) {
  document.querySelectorAll('.uni-toggler__item').forEach((item) => {
    item.addEventListener('click', clickToTogglerHandler);
  });
}

function clickToTogglerHandler(e) {
  const parent = e.target.closest('.uni-toggler');

  document.querySelectorAll('.uni-toggler__item').forEach((item) => {
    item.classList.remove('active');
  });

  this.classList.add('active');
}

class Notific {
  constructor(args) {
    this.ul = null;
    this.titleHTML = args.titleHTML || '';
    this.textHTML = args.textHTML || '';
    this.error = args.error || false;
    this.autodeleteTime = args.autodeleteTime || 5000;
    this.autodelete = args.autodelete || false;

    this.createCartTemplate = function () {
      const cart = document.createElement('div');
      cart.classList.add('cart-info');
      cart.innerHTML = `
        <button class="cart-info__close">
          <img src="assets/svg/icon-close-2.svg" alt="" loading="lazy">
        </button>
        <div class="cart-info__wrap-icon">
          <img src="assets/svg/icon-ok.svg" alt="" loading="lazy" class="cart-info__icon ok">
          <img src="assets/svg/icon-error.svg" alt="" loading="lazy" class="cart-info__icon err">
        </div> 
        <div class="cart-info__inner">
          <div class="cart-info__title">${this.titleHTML}</div>
          <div class="cart-info__text">${this.textHTML}</div>
        </div> 
      `;
      cart
        .querySelector('.cart-info__close')
        .addEventListener('click', this.closeHandler);

      if (this.error) {
        cart.classList.add('error');
      }

      return cart;
    };

    this.createUlTemplate = function () {
      const ul = document.createElement('ul');
      ul.classList.add('notific');
      ul.addEventListener('click', function (e) {
        if (e.target == this) {
          ul.querySelector('.cart-info__close').click();
        }
      });
      this.ul = ul;
      return ul;
    };

    this.createLiTemplate = function () {
      const li = document.createElement('li');
      li.classList.add('notific__item');
      return li;
    };

    this.displayUl = function () {
      document.body.append(this.createUlTemplate());
    };

    this.closeHandler = function (e) {
      const parentUl = e.target.closest('.notific');
      const parentLi = e.target.closest('.notific__item');

      parentLi.classList.add('remove-item');
      setTimeout(() => {
        parentLi.remove();

        if (parentUl && parentUl.childElementCount === 0) {
          parentUl.remove();
        }
      }, 500);
    };

    this.isNotificOnDisplay = function () {
      if (document.querySelector('.notific')) {
        return true;
      } else {
        return false;
      }
    };

    this.pushNote = function () {
      if (!this.isNotificOnDisplay()) {
        this.displayUl();
      }

      let newItem = this.createLiTemplate();
      newItem.append(this.createCartTemplate());

      if (this.autodelete) {
        setTimeout(() => {
          newItem.querySelector('.cart-info__close').click();
        }, this.autodeleteTime);
      }

      document.querySelector('.notific').append(newItem);
    };
  }
}

window.notifyFunc = function (args) {
  const temp = new Notific(args);
  temp.pushNote();
};

/* window.notifyFunc({
  error: true,
  titleHTML: 'TTTitle',
  textHTML: 'Minimum withdraw is 0.05 BNB /n <a href="#">View on bscscan</a>',
}); */

if (document.querySelector('.noteError')) {
  document.querySelector('.noteError').addEventListener('click', function () {
    window.notifyFunc({
      error: true,
      titleHTML: 'Error',
      textHTML: 'Minimum withdraw is 0.05 BNB',
      autodelete: true,
      autodeleteTime: 6000,
    });
  });
}

if (document.querySelector('.noteOkay')) {
  document.querySelector('.noteOkay').addEventListener('click', function () {
    window.notifyFunc({
      error: false,
      titleHTML:
        '<span class="text">Deposit 0.86</span> <span class="bnb">BNB</span>',
      textHTML: '<a href="#">View on bscscan</a>',
    });
  });
}

if (document.querySelector('.exampleNote-error')) {
  document.querySelector('.exampleNote-error').textContent = `
    window.notifyFunc({
      error: true,
      titleHTML: 'Error',
      textHTML: 'Minimum withdraw is 0.05 BNB',
      autodelete: true,
      autodeleteTime: 6000,
    });
  `;
}

if (document.querySelector('.exampleNote-ok')) {
  document.querySelector('.exampleNote-ok').textContent = `
    window.notifyFunc({
      error: false,
      titleHTML:
        '<span class="text">Deposit 0.86</span> <span class="bnb">BNB</span>',
      textHTML: '<a href="#">View on bscscan</a>',
    });
  `;
}
