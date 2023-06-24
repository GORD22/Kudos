import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function() {
const menuBtn = document.querySelector('.header .menu')
const popupWrapper = document.querySelector('.header-bottom__popup-wrapper')
const popup = document.querySelector('.header-bottom__popup')
const crossBtn = document.querySelector('.header-bottom__popup-wrapper .btn-cross')
const list = document.querySelectorAll('.header-bottom__popup__list')
const listEl = document.querySelectorAll('.header-bottom__popup__list .first')

menuBtn?.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
        popupWrapper?.classList.toggle('visible')
        popup?.classList.toggle('show');
    }

    if (popup?.classList.contains('show')) {
        menuBtn?.setAttribute('aria-expanded', 'true');
        menuBtn?.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
    } else {
        menuBtn?.setAttribute('aria-expanded', 'false');
        menuBtn?.setAttribute('aria-label', 'Открыть меню');
        enableScroll();
    }
})

crossBtn?.addEventListener('click', () => {
    popupWrapper?.setAttribute('aria-expanded', 'false');
    popupWrapper?.setAttribute('aria-label', 'Открыть меню');
    popupWrapper.classList.remove('visible');
    popup?.classList.remove('show');
    enableScroll();
});

for (let i = 0; i < listEl?.length; i++) {
    listEl[i]?.addEventListener('click', () => {
        list[i]?.classList.toggle('list-open')
    })
}
})()