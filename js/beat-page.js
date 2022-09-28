const beatWindow = document.querySelector('.beat-block');

let beatPage = [];

if(localStorage.getItem('beat-page')) {
    beatPage = JSON.parse(localStorage.getItem('beat-page'))
    if(beatWindow) {
        beatPage.forEach(item => renderPage(item))
    }
    
}

window.addEventListener('click', (e) => {
    const audioTarget = e.target.closest('.track-audio')
    if(e.target.closest('.beat-title')) {
        const pageInfo = {
            id: audioTarget.dataset.id,
            title: audioTarget.querySelector('.playlist-title').innerText,
            img: audioTarget.querySelector('.img-track').getAttribute('img'),
            tag1: audioTarget.querySelector('.beat-tag1').innerText,
            tag2: audioTarget.querySelector('.beat-tag2').innerText,
            price: audioTarget.querySelector('.beat-price').innerText,
            bpm: audioTarget.querySelector('.beat-bpm').innerText
        }

        beatPage.push(pageInfo);

        if(beatPage.length > 1) {
            beatPage.shift()
        }

        console.log(pageInfo)
        
        saveLocalPage()
    }
})

function saveLocalPage() {
    localStorage.setItem('beat-page', JSON.stringify(beatPage))
}

function renderPage(page) {
    const beatHTML = `
    <div class="beat-info" data-id="${page.id}">
        <div class="beat-info-img" style="background: url('./../img/beat/${page.img}');background-size: cover;background-repeat: no-repeat;background-position: center;"></div>
        <div class="beat-info-block">
            <div class="beat-info-title">${page.title}</div>
            <div class="beat-info-subtitle">Dansonn</div>
            <div class="beat-info-bpm">${page.bpm}</div>
            <div class="beat-info-date">August 2, 2020</div>
            <div class="beat-info-fun"></div>
        </div>
    </div>`
    beatWindow.insertAdjacentHTML('beforeend', beatHTML);
}