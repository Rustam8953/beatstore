const trackImg = document.querySelectorAll('.img-track');

const audioProgress = document.querySelectorAll('audio');

trackImg.forEach((item) => {
    const audioPlay = item.querySelector('audio');
    const childAttr = item.appendChild(audioPlay)
    item.addEventListener('click', (e) => {
        if(e.target.closest('.img-track')) {
            const targetTrack = e.target.closest('.img-track')
            const audioTrack = targetTrack.querySelector('audio')
            const srcAudio = targetTrack.querySelector('audio')
            srcAudio.setAttribute(`src`, `./audio/${targetTrack.getAttribute('src')}`);
            const faPlay = targetTrack.querySelector('.fa-play');
            const faPause = targetTrack.querySelector('.fa-pause');

            oneAudioPlay(document.body)

            if(audioTrack.paused) {
                audioTrack.play()
                const targetFa = targetTrack.querySelectorAll('.fa');
                targetFa.forEach((item) => {
                    item.classList.toggle('display-none');
                })

                console.log('qwerty')
            } else {
                audioTrack.pause()
                const targetFa = targetTrack.querySelectorAll('.fa');
                targetFa.forEach((item) => {
                    item.classList.toggle('display-none');
                })
                console.log('pause')
            }
        }
    })
})


function togglePlay(play) {

}

function oneAudioPlay(track) {
    track.addEventListener('play', (e) => {
        const audioElements = track.querySelectorAll('audio');
        for(let i = 0; i < audioElements.length; i++) {
            const audioElement = audioElements[i];
            audioElement !== e.target ? audioElement.pause() : false;
        }
    }, true)
}