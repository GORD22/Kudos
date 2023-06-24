
(function () {
    const colors = [
        '#F1C85C', '#7BAB23', '#FFA6A6', '#FFBF85',
        '#FF9839', '#FF2E2E', '#C50000', '#FFE713',
        '#AAE500', '#1ABB00', '#00DF9C', '#00ACD1',
    ]

    const colorList = document.querySelector('.color-list')

    if (colorList !== null) {
        colorList.innerHTML = colors.map(c =>
            `<input class="input-reset color-list__item" style="background-color: ${c}" type="checkbox" name="color">`
        ).join('')
    }
})()