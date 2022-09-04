const kitsWindow = document.querySelector('.kits-items');

const kitsArray = [
    {
        id: 1,
        title: 'Dusk to Dawn Guitars',
        img: 'dawn-guitar.png',
        price: '24.99'
    },
    {
        id: 2,
        title: 'Alchemy',
        img: 'dawn-guitar.png',
        price: '24.99'
    },
    {
        id: 3,
        title: 'Drums by Dansonn',
        img: 'dawn-guitar.png',
        price: '24.99'
    },
    {
        id: 4,
        title: 'Fracture Drums',
        img: 'dawn-guitar.png',
        price: '24.99'
    },
]

kitsArray.forEach((item => {
    const kitsHTML = 
    `<div class="kits-item" data-id=${item.id}>
        <div class="kits-item-img"></div>
        <div class="kits-item-title">${item.title}</div>
        <div class="kits-item-price">
            <span>$</span>
            <span kit-price>${item.price}</span>
        </div>
    </div>`
    kitsWindow.insertAdjacentHTML('beforeend', kitsHTML);
}))