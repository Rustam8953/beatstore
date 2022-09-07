const navCartPrice = document.querySelector('.nav-cart-price');

console.log(priceFormatTotal.to(+navCartPrice.innerText))

navCartPrice.innerText = priceFormatTotal.to(+navCartPrice.innerText)

const cartList = document.querySelector('.cart-list');

const cartLengthBlock = document.querySelector('.cart-length');

const cartLength = document.querySelector('.cart-length-num');

let cartItem = [];

if(localStorage.getItem('beat-cart')) {
    cartItem = JSON.parse(localStorage.getItem('beat-cart'))

    cartItem.forEach((item) => renderCart(item))
}

formatPrice()

calcCart()

window.addEventListener('click', (e) => {
    if(e.target.closest('.add-cart')) {
        const targetPrice = e.target.closest('.track-audio');

        const trackInfo = {
            id: targetPrice.dataset.id,
            title: targetPrice.querySelector('.beat-title').innerText,
            img: targetPrice.querySelector('.img-track').getAttribute('img'),
            bpm: targetPrice.querySelector('.beat-bpm').innerText,
            price: targetPrice.querySelector('.beat-price').innerText,
            tag1: targetPrice.querySelector('.beat-tag1').innerText,
            tag2: targetPrice.querySelector('.beat-tag2').innerText,
            time: targetPrice.querySelector('.beat-time').innerText,
            audio: targetPrice.querySelector('.img-track').getAttribute('audio'),
        }

        cartItem.push(trackInfo)
        
        renderCart(trackInfo)

        cartList.offsetHeight >= 200 ? cartList.classList.add('list-scroll') : cartList.classList.remove('list-scroll')

        btnToggle(targetPrice)
        cartLoaded()
        calcCart()
    }
    saveLocal()
    formatPrice()
})

window.addEventListener('DOMContentLoaded', () => {
    cartLoaded()
    formatPrice()
})

function btnToggle(btn) {
    const playlistBtnBlock = btn.querySelector('.playlist-button');

    const playlistBtn = btn.querySelector('.playlist-button-active');

    playlistBtn.innerText = "IN CART";


    playlistBtnBlock.classList.toggle('active');
}

function cartLoaded() {
    cartLength.innerText = cartItem.length;

    cartLength.innerText == 0 ? cartLengthBlock.classList.add('display-none') : cartLengthBlock.classList.remove('display-none')
}

function calcCart() {

    const allCartPrice = cartList.querySelectorAll('.cart-beat-price');

    let totalPrice = 0;

    for(let i = 0; i < cartItem.length; i++) {

        console.log(+cartItem[i].price)

        totalPrice = +cartItem[i].price + +totalPrice;

        navCartPrice.innerText = totalPrice
    }

}

function saveLocal() {
    localStorage.setItem('beat-cart', JSON.stringify(cartItem))
}

function renderCart(track) {
    const itemInCart = cartItem.forEach((item) => item.id)
    console.log(cartItem.forEach((item) => item.id))

    if(itemInCart) {
        console.log('yep');
        navCartPrice.innerText = '0.00';
    } else {
        const trackHTML = `
        <div class="cart-item" data-id=${track.id}>
            <div class="cart-left">
                <div class="cart-item-img" style="background: url('./../img/beat/${track.img}')"></div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${track.title}</div>
                    <div class="cart-item-subtitle">track</div>
                </div>
            </div>
            <div class="cart-right">
                <div class="cart-item-price cart-beat-price">${track.price}</div>
                <div class="cart-item-delete">
                    <div class="cart-item-line1"></div>
                    <div class="cart-item-line2"></div>
                </div>
            </div>
        </div>`;

        cartList.insertAdjacentHTML('beforeend', trackHTML);
        
        saveLocal()
    }
}

function formatPrice() {
    navCartPrice.innerText = priceFormatTotal.to(+navCartPrice.innerText)
}