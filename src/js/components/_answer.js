

(function() {
    const answerTop = document.querySelectorAll('.answer .answer__top')
    const answer = document.querySelectorAll('.answer')

    for (let i = 0; i < answerTop?.length; i++) {
        answerTop[i].addEventListener('click', () => {
            answer[i].classList.toggle('answer_view')
        })
    }
})()