let openFeedback = document.querySelector('.feedback-button');
let closeFeedback = document.querySelector('.close-button');
let feedbackWindow = document.querySelector('.feedback-modal');

openFeedback.addEventListener('click', (evt) => {
    evt.preventDefault()
    feedbackWindow.classList.add('open-modal')
})

closeFeedback.addEventListener('click', () => {
    feedbackWindow.classList.remove('open-modal')
})