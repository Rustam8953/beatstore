const inputBlock = document.querySelectorAll('.input-block');

const arrayLabel = document.querySelectorAll('label');

const inputArray = document.querySelectorAll('.contact-input');

window.addEventListener('click', (e) => {
    const inputTarget = e.target.closest('.input-block');
    if(inputTarget) {
        inputTarget.querySelector('label').classList.add('label-active');
        // if(window) {
        //     inputTarget.querySelector('label').classList.remove('label-active');
        // }
    } else {
        arrayLabel.forEach((item) => {
            item.classList.remove('label-active');
        })
    }
})

arrayLabel.forEach((n, i, a) => {
    n.addEventListener('click', () => {
        a.forEach(m => m.classList.toggle('label-active', m === n))
    })
})

inputArray.forEach((item) => {
    item.addEventListener('input', (e)=> {
        const inputValue = e.target.closest('.input-block')
        if(item.value.length >= 1) {
            inputValue.querySelector('label').classList.add('label-invalid');
        } else {
            inputValue.querySelector('label').classList.remove('label-invalid')
        }
    })
})