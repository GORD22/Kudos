import Swiper, { Autoplay, Navigation } from 'swiper';

const swiperProduct = new Swiper(".product__swiper", {
    modules: [Navigation, Autoplay],
    
    loop: true,
    
    slidesPerView: 3,

    spaceBetween: 9,

    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },

    breakpoints: {
        431: {
            spaceBetween: 15
        }
    }
});

(function() {
    const colorList = document.querySelectorAll('.product__color-list .color-list__item') 
    if (colorList.length > 0) {
        colorList[0].checked = true
    }

    for (let i = 0; i < colorList?.length; i++) {
        colorList[i].addEventListener('click', () => {
            for (let j = 0; j < colorList.length; j++) {
                if (i !== j) {
                    colorList[j].checked = false
                }
            }
        })
    }

    const counter = document.querySelector('.counter')
    const dec = document.querySelector('.counter__btn-dec')
    const inc = document.querySelector('.counter__btn-inc')

    dec?.addEventListener('click', () => {
        if (+counter?.textContent > 1) {
            counter.textContent = `${+counter.textContent - 1}`
        }
    })

    inc?.addEventListener('click', () => {
            counter.textContent = `${+counter.textContent + 1}`
    })

    const descr = document.querySelector('.product__desc')
    const descrBtn = document.querySelector('.btn-descr')

    descrBtn?.addEventListener('click', () => {
        descr?.classList.toggle('descr-view')
        descrBtn.classList.toggle('btn-descr_open')
    })
})()