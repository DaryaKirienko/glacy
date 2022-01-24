let siteWrapper = document.querySelector('.site-wrapper')
let firstSlideButton = document.querySelector('.slider-1-btn')
let secondSlideButton = document.querySelector('.slider-2-btn')
let thirdSlideButton = document.querySelector('.slider-3-btn')
let firstSlideText = document.querySelector('.slide-1')
let secondSlideText = document.querySelector('.slide-2')
let thirdSlideText = document.querySelector('.slide-3')

firstSlideButton.addEventListener('click', () => {
    siteWrapper.classList.add('site-wrapper-1')
    siteWrapper.classList.remove('site-wrapper-2')
    siteWrapper.classList.remove('site-wrapper-3')
    firstSlideButton.classList.add('active-slide')
    secondSlideButton.classList.remove('active-slide')
    thirdSlideButton.classList.remove('active-slide')
    firstSlideText.classList.add('current-slide')
    secondSlideText.classList.remove('current-slide')
    thirdSlideText.classList.remove('current-slide')
})

secondSlideButton.addEventListener('click', () => {
    siteWrapper.classList.remove('site-wrapper-1')
    siteWrapper.classList.add('site-wrapper-2')
    siteWrapper.classList.remove('site-wrapper-3')
    firstSlideButton.classList.remove('active-slide')
    secondSlideButton.classList.add('active-slide')
    thirdSlideButton.classList.remove('active-slide')
    firstSlideText.classList.remove('current-slide')
    secondSlideText.classList.add('current-slide')
    thirdSlideText.classList.remove('current-slide')
})

thirdSlideButton.addEventListener('click', () => {
    siteWrapper.classList.remove('site-wrapper-1')
    siteWrapper.classList.remove('site-wrapper-2')
    siteWrapper.classList.add('site-wrapper-3')
    firstSlideButton.classList.remove('active-slide')
    secondSlideButton.classList.remove('active-slide')
    thirdSlideButton.classList.add('active-slide')
    firstSlideText.classList.remove('current-slide')
    secondSlideText.classList.remove('current-slide')
    thirdSlideText.classList.add('current-slide')
})