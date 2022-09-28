const kitsWindow = document.querySelector('.kits-items');

const kitsPageWindow = document.querySelector('.kits-items-page')

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

if(kitsWindow) {
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
}

const kitsPage = [
    {
        id: 5,
        title: 'Moonlight Melodies',
        price: '24.99'
    },
    {
        id: 6,
        title: 'Moonlight Melodies',
        price: '24.99'
    },
    {
        id: 7,
        title: 'Moonlight Melodies',
        price: '24.99'
    },
    {
        id: 8,
        title: 'Moonlight Melodies',
        price: '24.99'
    },
]

const allKitsArray = kitsArray.concat(kitsPage)

if(kitsPageWindow) {
    allKitsArray.forEach((item) => {
        const pageKitsHTML = `
        <div class="kits-page" data-id=${item.id}>
            <div class="kits-page-img" style="background: url('./../img/kits/dusk\ guitar.png'); background-size: cover;"></div>
            <div class="kits-page-title">${item.title}</div>
            <div class="kits-page-price">
                <span>$</span>
                <span kit-price>${item.price}</span>
            </div>
            <button class="btn">details</button>
        </div>`
        kitsPageWindow.insertAdjacentHTML('beforeend', pageKitsHTML)
    })
}


console.log(allKitsArray)