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
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '122',
        time: '3:20',
        img: 'broken.png',
        audio: 'Broken.mp3'
    },
    {
        id: 1,
        title: 'Beautiful',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '122',
        time: '3:55',
        img: 'beatiful.png',
        audio: 'Beautiful.mp3',
    },
    {
        id: 3,
        title: 'Beautiful',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '122',
        time: '3:55',
        img: 'fligth.png',
    },
    {
        id: 4,
        title: 'Flight',
        price: '29.99',
        tag1: 'nf',
        tag2: 'halsey',
        bpm: '122',
        time: '3:55',
        img: 'fligth.png',
    },
]



playlistArray.forEach((item) => {
    const playlistHTML = `
        <div class="playlist-item track-audio" data-id=${item.id}>
            <div class="playlist-img img-track" style="background: url('./../img/beat/${item.img}'); background-size: cover;" src="${item.audio}"><audio></audio></div>
            <div class="playlist-border"></div>
            <div class="playlist-title per-45">${item.title}</div>
            <div class="playlist-time per-10">${item.time}</div>
            <div class="playlist-bpm per-5">122</div>
            <div class="playlist-tags per-20">
                <div class="playlist-tag"><a href="">#NF</a></div>
                <div class="playlist-tag"><a href="">#HALSEY</a></div>
            </div>
            <div class="playlist-fun per-20">
                <div class="playlist-share"></div>
                <div class="playlist-load"></div>
                <div class="playlist-btn">
                    <button class="playlist-button add-cart">
                        <div class="playlist-button-icon"></div>
                        <div class="playlist-button-price">
                            <span class="playlist-button-val">$</span>
                            <span class="playlist-button-num beat-price">29.99</span>
                        </div>
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
            allAudio[i].onloadeddata = () => {
                const timeValue = allAudio[i].duration/60;
                console.log(timeValue);
                item.innerText = timeValue;
            }
        }
    })
}
