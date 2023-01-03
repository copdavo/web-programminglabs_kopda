function showDate(params){
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = 'Сегодня: ' + today.toLocaleDateString('ru-RU');
}

window.addEventListener('load, showDate');