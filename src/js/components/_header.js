import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

const menuBtn = document.querySelector('.header .menu')
console.log(menuBtn)
const popupWrapper = document.querySelector('.header-bottom__popup-wrapper')
console.log(popupWrapper)
const popup = document.querySelector('.header-bottom__popup')
console.log(popup)
const crossBtn = document.querySelector('.header-bottom__popup-wrapper .btn-cross')
console.log(crossBtn)
const list = document.querySelectorAll('.header-bottom__popup__list')
console.log(list)
const listEl = document.querySelectorAll('.header-bottom__popup__list .first')
console.log(list)


menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
        popupWrapper.classList.toggle('visible')
        popup.classList.toggle('show');
    }

    if (popup.classList.contains('show')) {
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
    } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Открыть меню');
        enableScroll();
    }
})

crossBtn.addEventListener('click', () => {
    popupWrapper.setAttribute('aria-expanded', 'false');
    popupWrapper.setAttribute('aria-label', 'Открыть меню');
    popupWrapper.classList.remove('visible');
    popup.classList.remove('show');
    enableScroll();
});

for (let i = 0; i < listEl.length; i++) {
    listEl[i].addEventListener('click', () => {
        list[i].classList.toggle('list-open')
    })
}
