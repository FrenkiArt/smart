// Вендоры
import 'normalize.css';
import '../node_modules/svgxuse/svgxuse.min.js';

import SwiperCore, {Pagination} from 'swiper/core';
SwiperCore.use([Pagination]);
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Шрифты
import './assets/fonts/blacklist/font.css';

// Миксины
import './views/mixins/mixins.scss';

// Стили для сайта
import './assets/styles/style.scss';

// Модули нашего проекта
import './views/components/breadcrumbs/breadcrumbs.scss';
import './views/components/buttons/button.scss';
import './views/components/footer/footer.scss';
import './views/components/form/form.scss';
import './views/components/header/header.scss';
import './views/components/links/link.scss';
import './views/components/menu/menu.scss';
import './views/components/uni-checkbox/uni-checkbox.scss';
import './views/components/tabs/tabs.scss';
import './views/components/tabs/tabs.js';
import './views/components/cart/cart.scss';
import './views/components/cart/cart.js';
import './views/components/referral-panel/referral-panel.scss';
import './views/components/referral-panel/referral-panel.js';
import './views/components/pagination/pagination.scss';
import './views/components/calc-profit/calc-profit.scss';
import './views/components/calc-profit/calc-profit.js';
import './views/components/deposit-cart/deposit-cart.scss';
import './views/components/deposit-cart/deposit-cart.js';
import './views/mixins/mixins.scss';

import Cleave from 'cleave.js';

document.querySelectorAll('.input-number').forEach((item) => {
  new Cleave(item, {
    numeral: true,
    numeralPositiveOnly: true,
    delimiter: '',
    onValueChanged: function (e) {
      // console.log(e, this);
    },
  });
});

const sliderAltCarts = new Swiper('.swiper-alt-carts', {
  slidesPerView: 5,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    641: {
      slidesPerView: 3,
    },

    861: {
      slidesPerView: 4,
    },

    1051: {
      slidesPerView: 5,
    },
  },
});
