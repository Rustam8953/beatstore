const trackImg = document.querySelectorAll('.img-track');

const audioProgress = document.querySelector('audio');

// let canvasVis = document.querySelector('canvas'),
// $ = canvasVis.getContext('2d'),
//     W = (canvasVis.width = 1166),
//     H = (canvasVis.height = 200),
//     centerX = W / 2,
//     centerY = H / 2,
//     freqArray,
//     progress,
//     volume,
//     bars = 200,
//     barHeight,
//     barWidth = 2,
//     heightCanvas,
//     x,
//     y,
//     x1,
//     y1,
//     lineColor,
//     audioAnalyser,
//     srcAudio,
//     contextAudio

let body, num, array, width, context, logo, myElements, src, height, file

body = document.querySelector('.header-vis')

num = 100

window.addEventListener('resize', () => {
    num960()
})

window.addEventListener('DOMContentLoaded', () => {
    num960();
})

num960()

console.log(num)

array = new Uint8Array(num*2)

width = 5

let audioArray = [];

let newAudio = new Audio();


trackImg.forEach((item) => {
    const audioPlay = item.querySelector('audio');
    item.addEventListener('click', (e) => {
        const targetTrack = e.target.closest('.img-track')
        
        if(e.target.closest('.img-track')) {
            const srcAudio = targetTrack.querySelector('audio')
            const faPlay = targetTrack.querySelector('.fa-play');
            const faPause = targetTrack.querySelector('.fa-pause')

            oneAudioPlay(document.body)

            newAudio.src = srcAudio.getAttribute('src')

            if(audioArray.length > 0) {
                audioArray.shift()
            }

            audioArray.push(newAudio)

            console.log(newAudio.src)

            console.log(audioPlay)

            myElements = document.getElementsByClassName('logo')

            for(let i = 0; i < myElements.length; i++) {
                myElements[i].style.height = 10 + 'px';
            }
            
            // console.log(new Audio(srcAudio.getAttribute('src')))
            audioArray.forEach((item) => {
                if(item.paused) {
                    setTimeout(funPlay(), 100)
                    function funPlay() {
                        srcAudio.play()
                        item.play()
                    }
                    // const targetFa = targetTrack.querySelectorAll('.fa');
                    // faPause.classList.remove('display-none')
                    // faPlay.classList.add('display-none')
                    // console.log('qwerty')
                } else {
                    srcAudio.pause()
                    item.pause()
                    // const targetFa = targetTrack.querySelectorAll('.fa');
                    // faPlay.classList.remove('display-none')
                    // faPause.classList.add('display-none')
                    // console.log('pause')
                }

                if(!src) {
                    context =  new AudioContext()
                    src = context.createMediaElementSource(item)
                    analyser = context.createAnalyser()
                    // analyser.connect(context.destination)
                    src.connect(analyser)
                    console.log(context)
                }
            })
            
            loop()
        }
    })
    audioPlay.addEventListener('ended', () => {
        item.querySelector('.fa-play').classList.remove('display-none');
        item.querySelector('.fa-pause').classList.add('display-none');
    })
})

for(let i = 0; i < num; i++) {
    logo = document.createElement('div')
    logo.className = 'logo'
    logo.style.background = 'grey'
    logo.style.opacity = '0.6'
    logo.style.minWidth = width + 'px'
    body.appendChild(logo)
}

function togglePlay(play) {
}

function oneAudioPlay(track) {
    track.addEventListener('play', (e) => {
        const audioElements = track.querySelectorAll('audio');
        for(let i = 0; i < audioElements.length; i++) {
            const audioElement = audioElements[i];
            if( audioElement !== e.target) {
                audioElement.pause()
                audioElement.currentTime = 0;
            }
        }
    }, true)
}

function loop() {
    window.requestAnimationFrame(loop)
    analyser.getByteFrequencyData(array)
    for(let i = 0; i < num; i++) {
        height = array[i + num]

        myElements[i].style.minHeight = height + 'px'
        if(screen.width < 590) {
            height <= 10 ? myElements[i].style.minHeight = height + 'px' : myElements[i].style.minHeight = (height - 50) + 'px'
        }
    }
}

function num960() {
    if(screen.width <= 590) {
        num = 31
    } else if(screen.width <= 960) {
        num = 63;
    } else {
        num = 100;
    }
}

// function playTrack() {
//     const qwertyBlock = document.querySelector('.block-qwerty')

//     qwertyBlock.innerHTML = `progress: <span class="progress"></span> <br> volume: <span class="volume"></span>`;

//     progress = document.querySelector('.progress')

//     volume = document.querySelector('.volume')

//     contextAudio = new AudioContext()
//     audioAnalyser = contextAudio.createAnalyser()
//     audioAnalyser.connect(contextAudio.destination)
//     freqArray = new Uint8Array(audioAnalyser.frequencyBinCount)
//     console.log(freqArray)

//     audioVisual()
// }

// function audioVisual() {

//     canvasVis.style.display = 'block';

//     let progressAudio = srcAudio.currentTime / srcAudio.duration

//     let heightCanvas = 200;

//     $.clearRect(0, 0, W, H)

//     $.beginPath()
//     $.arc(centerX, centerY, heightCanvas, 0, Math.PI * (2 * progressAudio))
//     $.lineWidth = 30;
//     $.stroke();

//     volume.innerText = Math.trunc(srcAudio.volume * 100) + '%';

//     progress.innerText = Math.trunc(progressAudio * 100) + '%';

//     audioAnalyser.getByteFrequencyData(freqArray) // копируем данные о частотах в frequencyArray

//     for(let i = 0; i < bars.length; i++) {
//         heightCanvas = 500
//         barHeight = freqArray[i] * 0.6
        
//         let rads = Math.PI * 2 / bars

//         x = centerX + Math.cos(rads * i) * heightCanvas
//         y = centerY + Math.sin(rads * i) * heightCanvas
//         x1 = centerX + Math.cos(rads * i) * (heightCanvas + barHeight)
//         y1 = centerY + Math.sin(rads * i) * (heightCanvas + barHeight)

//         drawBar(x, y, x1, y1, barWidth, freqArray[i])
//     }

//     requestAnimationFrame(audioVisual)
// }

// function drawBar(x, y, x1, y1, width, frequency) {
//     // цвет колонок меняется от светло-голубого до темно-синего
//     lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";

//     console.log(lineColor)
    
//     // рисуем линии
//     $.strokeStyle = lineColor;
//     $.lineWidth = width;
//     $.beginPath();
//     $.moveTo(x, y);
//     $.lineTo(x1, y1);
//     $.stroke();
// }