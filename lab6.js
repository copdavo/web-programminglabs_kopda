function setRussian(){
    let name = document.getElementById('student');
    name.innerHTML = 'Копылов Виктор';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';

    document.getElementById('Your-name').innerHTML = 'Ваше имя';
    document.getElementById('imput-name').placeholder = 'введите имя';
    document.getElementById('Your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('imput-surname').placeholder = 'введите фамилию';
    document.getElementById('Your-age').innerHTML = 'Ваш возраст';
    document.getElementById('imput-age').placeholder = 'введите возраст';
    document.getElementById('ok-button').value = 'ок';
    document.getElementById('reset-button').value = 'сброс';

}
function setEnglish(){
    let name = document.getElementById('student');
    name.innerHTML = 'Kopyov Viktor';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-01, 3rd year, 2022';

    document.getElementById('Your-name').innerHTML = 'Your name';
    document.getElementById('imput-name').placeholder = 'enter your name';
    document.getElementById('Your-surname').innerHTML = 'Your surname';
    document.getElementById('imput-surname').placeholder = 'enter surname';
    document.getElementById('Your-age').innerHTML = 'Your age';
    document.getElementById('imput-age').placeholder = 'imput age';
    document.getElementById('ok-button').value = 'ok';
    document.getElementById('reset-button').value = 'reset';
}