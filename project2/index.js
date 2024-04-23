const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

const intensityRange = document.getElementById('intensityRange');
const intensityValue = document.getElementById('intensityValue');

intensityRange.addEventListener('input', function() {
    const value = this.value;
    intensityValue.textContent = value;
});

let intervalId;

const startChange = function(){
    const intervalDuration = intensityRange.value; // Get the current intensity value
    if(!intervalId){
        intervalId = setInterval(bgColor, intervalDuration);
    }
    function bgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChange = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);
