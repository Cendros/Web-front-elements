document.addEventListener('DOMContentLoaded', () => {
    const fancyElements = document.getElementsByClassName('fancy');
    for(element of fancyElements) {
        element.addEventListener('mouseenter', event => explode(event.target))
        element.addEventListener('mouseleave', event => normal(event.target))
        generateLetters(element);
    }
})

const generateLetters = element => {
    const text = element.innerText.split('');
    element.innerText = '';
    for(letter of text) {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
    }
}

const explode = element => {
    const text = element.getElementsByClassName('letter')
    
    for(letter of text) {
        const xOffset = Math.floor(Math.random() * 20 - 10)
        const yOffset = Math.floor(Math.random() * 100 - 50)
        const angle = Math.floor(Math.random() * 50 - 25)
        letter.style.transform = `translate(${xOffset}%, ${yOffset}%) rotate(${angle}deg)`
    }
}

const normal = element => {
    const text = element.getElementsByClassName('letter')
    
    for(letter of text) {
        
        letter.style.transform = ``
    }
}