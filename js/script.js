const burgerBlock = document.querySelector('.nav-burger-block')
const line1 = document.querySelector('.line1')
const line3 = document.querySelector('.line3')
const navBurger = document.querySelector('.nav-burger-block')

const navList = document.querySelector('.nav-list')
const navCart = document.querySelector('.nav-click')
const cartBlock = document.querySelector('.cart-block')
const btnActive = document.querySelector('.playlist-button')
const sliderIndicators = document.querySelectorAll('.slider__indicators')

navBurger.addEventListener('click', () => {
    burgerBlock.classList.toggle('active')
    line1.classList.toggle('active') 
    line3.classList.toggle('active');
    navList.classList.toggle('active')
})

navCart.addEventListener('click', () => {
    cartBlock.classList.toggle('display-none')
})

const kitsSlider = document.querySelector('.kits')
const kitsWrapper = document.querySelector('.kits-wrapper')
const kitsItems = document.querySelector('.kits-items')
const kitsItem = document.querySelectorAll('.kits-item')

const leaseSlider = document.querySelector('.lease')
const leaseWrapper = document.querySelector('.lease-wrapper')
const leaseItems = document.querySelector('.lease-items')
const leaseItem = document.querySelectorAll('.lease-item')

console.log(kitsItem)

window.addEventListener('resize', () => {
    screenWidth()
})

window.addEventListener('DOMContentLoaded', () => {
    screenWidth()
})

function screenWidth() {
    if(screen.width < 560) {
        if(kitsSlider) {
            kitsSlider.classList.add('slider')
            kitsWrapper.classList.add('slider__wrapper')
            kitsItems.classList.add('slider__items')
        }
        if(leaseSlider) {
            leaseSlider.classList.add('slider-lease')
            leaseWrapper.classList.add('slider__wrapper')
            leaseItems.classList.add('slider__items')
        }
        

        for(let i = 0; i < kitsItem.length && i < leaseItem.length && i < sliderIndicators.length; i++) {
            kitsItem[i].classList.add('slider__item')
            leaseItem[i].classList.add('slider__item')
            sliderIndicators[i].classList.remove('display-none')
        }
        const slider = new ChiefSlider('.slider', {
            swipe: true,
            refresh: true,
            loop: false,
            autoplay: false,
        })

        const sliderLease = new ChiefSlider('.slider-lease', {
            swipe: true,
            refresh: true,
            loop: false,
            autoplay: false,
        })
    }
    if(screen.width > 560) {
        if(kitsSlider) {
            kitsSlider.classList.remove('slider')
            kitsWrapper.classList.remove('slider__wrapper')
            kitsItems.classList.remove('slider__items')
        }
        if(leaseSlider) {
            leaseSlider.classList.remove('slider-lease')
            leaseWrapper.classList.remove('slider__wrapper')
            leaseItems.classList.remove('slider__items')
        }
        
        for(let i = 0; i < kitsItem.length && i < leaseItem.length && i < sliderIndicators.length; i++) {
            kitsItem[i].classList.remove('slider__item')
            leaseItem[i].classList.remove('slider__item')
            sliderIndicators[i].classList.add('display-none')
        }
    }
}