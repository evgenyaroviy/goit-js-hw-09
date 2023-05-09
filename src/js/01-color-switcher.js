function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
    colorTimerId: null
}

refs.startBtn.addEventListener('click', colorBody)
refs.stopBtn.addEventListener('click', colorBodyStop)
refs.stopBtn.disabled = true;

function colorBody() {
        const color = getRandomHexColor();
        refs.body.style.backgroundColor = `${color}`;
    refs.colorTimerId = setInterval(() => {
        const color = getRandomHexColor();
        refs.body.style.backgroundColor = `${color}`;
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function colorBodyStop() {
    clearInterval(refs.colorTimerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

refs.startBtn.style.padding = '10px 15px'
refs.stopBtn.style.padding = '10px 15px'