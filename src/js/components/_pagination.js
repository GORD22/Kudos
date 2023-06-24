
(function () {
    const pageNumber = document.querySelectorAll('.pagination__item')

    for (let i = 0; i < pageNumber.length; i++) {
        if (pageNumber[i]?.textContent !== '...') {
            pageNumber[i]?.addEventListener('click', () => {
                pageNumber?.forEach(p => p.classList.remove('current'))
                pageNumber[i]?.classList.add('current')
            })
        }
    }
})()