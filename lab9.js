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