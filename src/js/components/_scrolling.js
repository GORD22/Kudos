

(function() {
    const scrollBtns = document.querySelectorAll('.btn-scroll')
    const listTitle = document.querySelectorAll('.conditions__list-title')

    for (let i = 0; i < scrollBtns?.length; i++) {
        scrollBtns[i]?.addEventListener('click', () => {
            scrollBtns?.forEach(b => b.classList.remove('btn-scroll_active'))
            scrollBtns[i]?.classList.add('btn-scroll_active')
            listTitle[i].scrollIntoView({
                behavior: 'smooth',
                block: "center"
            })
        })
    }
})()