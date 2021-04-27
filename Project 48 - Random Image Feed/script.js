const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
let rowsInput = 0

const rowsButton = document.getElementById('rowsButton')

rowsButton.addEventListener('click', generateImages())

function generateImages() {
    rowsInput = parseInt(document.getElementById('rowsInput').value)

    for (let i = 0; i < rowsInput * 3; i++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`
        container.appendChild(img)
    }

}

function clearRows() {
    let rows = document.querySelector('.rows')
    if (rows.style.display !== 'none') {
        rows.style.display = 'none'
    } else {
        rows.style.display = 'block'
    }
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    // return Math.floor(Math.random() * 10) + 300
    return Math.floor(Math.random() * 10) + rowsInput + 250
}