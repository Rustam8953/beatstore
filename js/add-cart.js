const priceFormatTotalCart = wNumb({
    mask: '.',
    decimals: 2,
    thousand: ' ',
})

const navCartPrice = document.querySelector('.nav-cart-price');

navCartPrice.innerText = priceFormatTotalCart.to(+navCartPrice.innerText)

const cartList = document.querySelector('.cart-list');

const cartLengthBlock = document.querySelector('.cart-length');

const cartLength = document.querySelector('.cart-length-num');

const cartItemDelete = document.querySelector('.cart-item-delete')



let cartItem = [];

if(localStorage.getItem('beat-cart')) {
    cartItem = JSON.parse(localStorage.getItem('beat-cart'))

    cartItem.forEach((item) => renderCart(item))
}

formatPrice()

calcCart()

window.addEventListener('click', (e) => {
    const targetDelete = e.target.closest('.cart-item');

    const targetItem = cartList.querySelectorAll('.cart-item')

    const targetPrice = e.target.closest('.track-audio');

    console.log(targetItem.forEach(item => item))

    if(e.target.closest('.add-cart')) {

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

        btnToggle(targetPrice)
        cartLoaded()
        calcCart()
    }

    listScroll()

    if(targetDelete) {
        const btnDelete = targetDelete.querySelector('.cart-item-delete');
        if(btnDelete) {
            localStorage.removeItem('beat-cart')
            saveLocal()
        }
    }
    
    saveLocal()
    formatPrice()
})

window.addEventListener('DOMContentLoaded', () => {
    listScroll()
    cartLoaded()
    formatPrice()
})

function listScroll() {
    cartList.offsetHeight >= 200 ? cartList.classList.add('list-scroll') : cartList.classList.remove('list-scroll')
}

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
                <div class="cart-item-img" style="background: url('./img/beat/${track.img}')"></div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${track.title}</div>
                    <div class="cart-item-subtitle">track</div>
                </div>
            </div>
            <div class="cart-right">
                <div class="cart-item-price cart-beat-price">${track.price}</div>
                <div class="cart-item-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
            </div>
        </div>`;

        cartList.insertAdjacentHTML('beforeend', trackHTML);
        
        saveLocal()
    }
}

function formatPrice() {
    navCartPrice.innerText = priceFormatTotalCart.to(+navCartPrice.innerText)
}