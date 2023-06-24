import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';


(function() {
    const clearBtn = document.querySelector('.filter__btn-clear')

    const checkBoxes = document.querySelectorAll('.filter input')

    clearBtn?.addEventListener('click', () => {
        for (let i = 0; i < checkBoxes?.length; i++) {
            checkBoxes[i].checked = false
        }
    })

    const filterBtn = document.querySelector('.place-plus-sort__btn-filter')
    const filterWrapper = document.querySelector('.filter-wrapper')
    const closeBtn = document.querySelector('.filter__btn-close')
    
    filterBtn?.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            filterWrapper?.classList.toggle('filter-visible')
        }
    
        if (filterWrapper?.classList.contains('filter-visible')) {
            disableScroll();
        } else {
            enableScroll();
        }
    })
    
    closeBtn?.addEventListener('click', () => {
        filterWrapper?.classList.remove('filter-visible');
        enableScroll();
    });
})()