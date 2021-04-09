// images array, it can hold as many as you want
let images = ["url('img/1-min.jpg')", "url('img/2-min.jpg')",
    "url('img/3-min.jpg')", "url('img/4-min.jpg')", "url('img/5-min.jpg')", "url('img/6-min.jpg')", "url('img/7-min.jpg')", "url('img/8-min.jpg')", "url('img/9-min.jpg')", "url('img/10-min.jpg')",]

const sliderContentBox = document.querySelector('.slider__content');

// creating slide divs for images, it counts images array
createSlides()
function createSlides() {
    images.forEach(image => {
        let slide = document.createElement('div');
        slide.classList.add('slider__content--slide');
        sliderContentBox.appendChild(slide)
    })
    const slides = document.querySelectorAll('.slider__content--slide');
    slides[0].classList.add('active')
}

// main body - background image
const mainBodySlider = document.querySelector('.slider');
// all created slides for forground images
const slides = document.querySelectorAll('.slider__content--slide');
const leftArrow = document.querySelector('.slider__content--arrow-left');
const rightArrow = document.querySelector('.slider__content--arrow-right');

// active idx
let activeSlideIdx = 0;

// setting background on active slide
function setMainBgToSlider() {
    slides.forEach((slide, idx) => {
        if (slide.classList.contains('active')) {
            slide.style.backgroundImage = images[activeSlideIdx];
            mainBodySlider.style.backgroundImage = images[activeSlideIdx];
        }
    })
}
setMainBgToSlider()

// removing active slides on every img, and setting only to active
function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[activeSlideIdx].classList.add('active');
}
setActiveSlide()

// left arrow
leftArrow.addEventListener('click', () => {
    // checking for idx 
    if (activeSlideIdx < 1) {
        activeSlideIdx = images.length;
    }
    activeSlideIdx--;
    setActiveSlide()
    setMainBgToSlider()
})

rightArrow.addEventListener('click', () => {
    activeSlideIdx++;
    // checking for idx 
    if (activeSlideIdx > images.length - 1) {
        activeSlideIdx = 0
    }
    setActiveSlide()
    setMainBgToSlider()
})

console.log(images.length)