function clickMe(button){
        if(button.innerHTML == 'Щелчок')
            button.innerHTML = 'Спасибо';
        else
            button.innerHTML = 'Щелчок';

}
function clickName(button){
    if(button.innerHTML == 'Виктор')
        button.innerHTML = 'Копылов';
    else
        button.innerHTML = 'Виктор';
}
function clickMe2(button){
    if( button.innerHTML == 'Нажми меня'){
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'DarkBlue';
    }
    else if( button.innerHTML == 'Ещё раз нажми'){
        button.innerHTML = 'Ещё';
        button.style.color = 'Violet';}
    else if( button.innerHTML == 'Ещё'){
        button.innerHTML = 'Начать сначала';
        button.style.color = 'BluePink';}
    else if( button.innerHTML == 'Начать сначала'){
        button.innerHTML = 'Нажми меня';
        button.style.color = 'Red';}
    else
        button.innerHTML = 'Нажми меня';
}
function showCoords(event){

    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY + ' ' + 
    (event.ctrlKey? '<b>Ctrl</b>': '<s>Ctrl</s>') + ' ' + 
    (event.shiftKey? '<b>Shift</b>': '<s>Shift</s>') + ' ' + (event.altKey? '<b>Alt</b>': '<s>Alt</s>');
}
    window.addEventListener('DOMContentLoaded', function() {
        let coords = document.querySelector('#coords');
        coords.addEventListener('mousemove', showCoords);
});

function showFocus(event){
    event.target.style.color = 'Fuchsia'
    event.target.style.fontSize = 30 + 'px'
}

function showBlur(event) {
    event.target.style.color = 'black'
    event.target.style.fontSize = 18 + 'px'
}
window.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelectorAll ('input[type = "text"]');
    text [0].addEventListener('focus', showFocus);
    text [1].addEventListener('focus', showFocus);
    text [2].addEventListener('focus', showFocus);
    text [0].addEventListener('blur', showBlur);
    text [1].addEventListener('blur', showBlur);
    text [2].addEventListener('blur', showBlur);
});

function showOutput(event){
    document.getElementById('output').innerHTML = event.target.value;
}

window.addEventListener('DOMContentLoaded', function() {
let texts = document.querySelectorAll('input[type="text"]');
    texts[0].addEventListener('change', showOutput);
    texts[1].addEventListener('change', showOutput);
    texts[2].addEventListener('change', showOutput);
});