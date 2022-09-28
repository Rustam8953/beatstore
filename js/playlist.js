const playlist = document.querySelector('.playlist-items');

const playlistItem = document.querySelector('.playlist-item');

// window.addEventListener('click', (e) => {
//     if(e.target.closest('.track-audio')) {
//         const localTrack = e.target.closest('.track-audio');
//         const targetAudio = localTrack.querySelector('audio');
//         targetAudio.onloadeddata = () => {
//             console.log(targetAudio.duration/60)
//         }
//     }
// })

const playlistArray = [
    {
        id: 1,
        title: 'Broken',
        price: '29.99',
        tag1: 'imagine dragon',
        tag2: 'eminem',
        bpm: '90',
        time: '3:08',
        img: 'broken.png',
        audio: 'Broken.mp3'
    },
    {
        id: 2,
        title: 'Beautiful',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '116',
        time: '3:37',
        img: 'beatiful.png',
        audio: 'Beautiful.mp3',
    },
    {
        id: 3,
        title: 'Letter to Myself',
        price: '29.99',
        tag1: 'eminem',
        tag2: 'mgk',
        bpm: '131',
        time: '3:32',
        img: 'letter\ to\ myself.png',
        audio: 'letter\ to\ myself.mp3',
    },
    {
        id: 4,
        title: 'Drive',
        price: '29.99',
        tag1: 'x ambassadors',
        tag2: 'imagine dragons',
        bpm: '118',
        time: '3:34',
        img: 'drive.png',
        audio: 'Drive.mp3'
    },
    {
        id: 5,
        title: 'Invincible',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '122',
        time: '3:55',
        img: '',
        audio: 'Invincible.mp3'
    },
    {
        id: 6,
        title: 'Fields',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '118',
        time: '2:30',
        img: 'fields.png',
        audio: 'Fields.mp3'
    },
    {
        id: 7,
        title: 'Broken Wings',
        price: '29.99',
        tag1: 'nf',
        tag2: 'witt lowry',
        bpm: '130',
        time: '3:01',
        img: 'broken\ wings.png',
        audio: 'Broken\ Wings.mp3'
    },
]

playlistArray.forEach((item) => {
    const playlistHTML = `
        <div class="playlist-item track-audio" data-id=${item.id}>
            <div class="playlist-img img-track" audio="${item.audio}" img="${item.img}" style="background: url('./img/beat/${item.img}'); background-size: cover;" src="${item.audio}"><audio preload="auto" src="./audio/${item.audio}"></audio></div>
            <a href="./beat-page.html" class="beat-link per-45">
                <div class="playlist-title beat-title">${item.title}</div>
            </a>
            <div class="playlist-border"></div>
            <div class="playlist-time per-10 beat-time">${item.time}</div>
            <div class="playlist-bpm per-5 beat-bpm">${item.bpm}</div>
            <div class="playlist-tags per-20">
                <div class="playlist-tag" role='button'><a href="" class="beat-tag beat-tag1">#${item.tag1}</a></div>
                <div class="playlist-tag" role='button'><a href="" class="beat-tag beat-tag2">#${item.tag2}</a></div>
            </div>
            <div class="playlist-fun per-20">
                <div class="playlist-share beat-share"></div>
                <div class="playlist-load beat-load"></div>
                <div class="playlist-btn">
                    <button class="playlist-button add-cart">
                        <div class="playlist-button-icon"></div>
                        <div class="playlist-button-price">
                            <span class="playlist-button-val">$</span>
                            <span class="playlist-button-num beat-price">${item.price}</span>
                        </div>
                        <div class="playlist-button-active">IN CART</div>
                    </button>
                </div>
            </div>
        </div>`;
    playlist.insertAdjacentHTML('beforeend', playlistHTML);
})

const allAudio = document.querySelectorAll('audio');

const playListTime = document.querySelectorAll('.playlist-time')

console.log(playListTime.forEach((item) => {
    item.matches('.img-track')
}));

timeChange()

function timeChange() {
    playListTime.forEach((item) => {
        for(let i = 0; i < allAudio.length; i++) {
            // allAudio[i].onloadeddata = () => {
            //     const timeValue = allAudio[i].duration/60;
            //     console.log(timeValue);
            //     item.innerText = timeValue;
            // }
        }
    })
}


//Форматирую прайсы


const priceFormatTotal = wNumb({
    mask: '.',
    decimals: 2,
    thousand: ' ',
})

const beatPrice = document.querySelectorAll('.beat-price');

for(let i = 0; i < beatPrice.length; i++) {
    beatPrice[i].innerText = priceFormatTotal.to(+beatPrice[i].innerText)

    console.log(priceFormatTotal.to(29.99) + priceFormatTotal.to(29.99))
}