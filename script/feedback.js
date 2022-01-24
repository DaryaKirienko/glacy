let openFeedback = document.querySelector('.feedback-button');
let closeFeedback = document.querySelector('.close-button');
let feedbackWindow = document.querySelector('.feedback-modal');
let feedbackWrapper = document.querySelector('.feedback-wrapper')

openFeedback.addEventListener('click', (evt) => {
    evt.preventDefault()
    feedbackWindow.classList.add('open-modal')
})

closeFeedback.addEventListener('click', () => {
    feedbackWindow.classList.remove('open-modal')
})

feedbackWindow.addEventListener('click', () => {
    feedbackWindow.classList.remove('open-modal')
})


feedbackWrapper.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
})