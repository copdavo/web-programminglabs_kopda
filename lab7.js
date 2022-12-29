function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <= 17){
        greeting = 'Здравствуй, ';
        if(userSex == 'femail') {
            greeting += 'девочка';
        }
        else {
            greeting += 'мальчик';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'femail') {
            greeting += 'госпожа';
        }
        else {
            greeting += 'господин';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n'
        + 'Ваш возраст: ' + userAge);

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

    function makeStairs(){
        let stairs = document.querySelector('#stairs');
        let stepCount = 20;
        for(let i = 0; i<stepCount; i++) {
            stairs.innerHTML += '<div class="step"></div>';
        }

        let steps = document.querySelectorAll('.step');
        for(let i = 0; i<steps.length; i++) {
            steps[i].style.left = (30 + 10*i) + 'px';
            steps[i].style.top = (300 + 80*i) + 'px';
            steps[i].innerHTML = 'Блок номер ' + i;
        }
    }