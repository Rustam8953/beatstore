const trackImg = document.querySelectorAll('.img-track');

const audioProgress = document.querySelectorAll('audio');


trackImg.forEach((item) => {
    const audioPlay = item.querySelector('audio');
    const childAttr = item.appendChild(audioPlay)
    item.addEventListener('click', (e) => {
        const targetTrack = e.target.closest('.img-track')
        const audioTrack = targetTrack.querySelector('audio')
        const srcAudio = targetTrack.querySelector('audio')
        srcAudio.setAttribute(`src`, `./audio/${targetTrack.getAttribute('src')}`);

        oneAudioPlay(document.body)
        
        togglePlay(audioPlay)
    })
})


function togglePlay(play) {
    return play.paused ? play.play() : play.pause();
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