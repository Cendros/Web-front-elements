document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', (event) => {
        const text = document.getElementById('text');
        generateLetters(text);
        event.target.remove()
    })
})

const generateLetters = element => {
    let text = 'Wooooooooooooooooooow'
    text = text.split('');
    element.innerText = '';
    const end = text.length;
    let i = 0;
    loop(text, i, end, element);
}

const loop = (text, i, end, element) => {
    setTimeout(() => {
        const letter = text[i]
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
        i++;
        if(i < end)
            loop(text, i, end, element);
    }, 100);
}