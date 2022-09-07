const burgerBlock = document.querySelector('.nav-burger-block');
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
const navBurger = document.querySelector('.nav-burger-block');

const navList = document.querySelector('.nav-list');

const navCart = document.querySelector('.nav-click')

const cartBlock = document.querySelector('.cart-block');

const btnActive = document.querySelector('.playlist-button');

navBurger.addEventListener('click', () => {
    burgerBlock.classList.toggle('active')
    line1.classList.toggle('active') 
    line3.classList.toggle('active');
    navList.classList.toggle('active')
})

navCart.addEventListener('click', () => {
    cartBlock.classList.toggle('display-none')
})