// Вендоры
import 'normalize.css';
import '../node_modules/svgxuse/svgxuse.min.js';

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
import './views/components/tabs/tabs.scss';
import './views/components/tabs/tabs.js';
import './views/components/cart/cart.scss';
import './views/components/cart/cart.js';
import './views/components/referral-panel/referral-panel.scss';
import './views/components/pagination/pagination.scss';
import './views/components/popup/popup.scss';
import {myPopup} from './views/components/popup/popup.js';
import './views/mixins/mixins.scss';

// Страницы
// import './views/components/pages/index.scss';

/* Про Попапы */
if (document.querySelector('[data-popup]')) {
  myPopup(document.querySelectorAll('[data-popup]'));
}
