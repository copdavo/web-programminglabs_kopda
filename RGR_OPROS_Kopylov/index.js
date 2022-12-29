const questions = [
    {
        question: "Какие явления изучает физика?",
        optionA: "происходящие на Земле",
        optionB: "наблюдаемые на земле и в небе",
        optionC: "механические, тепловые",
        optionD: "происходящие на земле и в океанах",
        correctOption: "optionA"
    },

    {
        question: "К физическим телам относятся ?",
        optionA: "молоко",
        optionB: "глина",
        optionC: "скамейка",
        optionD: "лыжи",
        correctOption: "optionA"
    },

    {
        question: "К веществам относятся ?",
        optionA: "сахар",
        optionB: "булка",
        optionC: "йод",
        optionD: "бинт",
        correctOption: "optionD"
    },

    {
        question: "Выразите длину тела, равную 5000 мм, в метрах и километрах.",
        optionA: "50 м; 0,05 км",
        optionB: "5 м; 0,05 км",
        optionC: "5 м; 0,005 км",
        optionD: "50 м; 0,5 км",
        correctOption: "optionC"
    },

    {
        question: "Цена деления шкалы линейки 1 мм. Какую погрешность допускают те, кто измеряет ею длину тела? ?",
        optionA: "1 мм",
        optionB: "2 мм",
        optionC: "0,5 мм",
        optionD: "2 нм",
        correctOption: "optionD"
    },

    {
        question: "Мельчайшие частицы, из которых состоят вещества, называются ?",
        optionA: "молекулами",
        optionB: "микрочастицами",
        optionC: "крупинками",
        optionD: "квартеты",
        correctOption: "optionA"
    },

    {
        question: "Между молекулами в веществе происходит ?",
        optionA: "взаимное притяжение и отталкивание",
        optionB: "только притяжение",
        optionC: "только отталкивание",
        optionD: "диффузия",
        correctOption: "optionC"
    },

    {
        question: "Чем отличаются молекулы воды от молекул пара ?",
        optionA: "числом атомов",
        optionB: "размером",
        optionC: "Aсвойствами",
        optionD: "ничем",
        correctOption: "optionA"
    },

    {
        question: "Диффузия — это ?",
        optionA: "перемешивание веществ",
        optionB: "Tувеличение промежутков между молекулами",
        optionC: "проникновение хаотически движущихся молекул",
        optionD: "что это",
        correctOption: "optionD"
    },

    {
        question: `"Как следует поступить, чтобы ускорить диффузию?`,
        optionA: "охладить контактирующие тела",
        optionB: "положить их в тёмное место",
        optionC: "повысить температуру тел",
        optionD: "уменьшить площадь границы между ними",
        correctOption: "optionC"
    },

    {
        question: "Какие общие свойства присущи газам ?",
        optionA: "легко охлаждаются",
        optionB: "имеют собственную форму",
        optionC: "обладают текучестью",
        optionD: "занимают весь объём",
        correctOption: "optionC"
    },

    {
        question: "Какими общими свойствами обладают жидкости ?",
        optionA: "занимают объем сосуда",
        optionB: "приобретают объем и форму сосуда",
        optionC: "имеют собственный объем",
        optionD: "мало сжимаемы",
        correctOption: "optionD"
    },


    {
        question: "Какие общие свойства принадлежат твердым телам ?",
        optionA: "имеют собственную форму и объем",
        optionB: "легко изменяют форму и объем",
        optionC: "легко сжимаемы",
        optionD: "практически не сжимаемы",
        correctOption: "optionB"
    },

    {
        question: "В каком состоянии — жидком, твердом, газообразном — может находиться бензин ?",
        optionA: "во всех трех состояниях",
        optionB: "только в жидком состоянии",
        optionC: "в жидком и газообразном состоянии",
        optionD: "в жидком и твердом состояниях",
        correctOption: "optionA"
    },

    {
        question: "Чем объясняется малая сжимаемость твердых тел ?",
        optionA: "быстрым движением их молекул",
        optionB: "очень малым размером молекул",
        optionC: "плотной упаковкой молекул",
        optionD: "хаотичностью движения молекул",
        correctOption: "optionB"
    },

    {
        question: "Что служит источником физических знаний ?",
        optionA: "измерения",
        optionB: "наблюдения и опыты",
        optionC: "только наблюдения",
        optionD: "только опыты",
        correctOption: "optionC"
    },

    {
        question: "К физическим телам относятся ?",
        optionA: "сок",
        optionB: "здание",
        optionC: "песок",
        optionD: "вилка",
        correctOption: "optionC"
    },

    {
        question: "К веществам относится ?",
        optionA: "провод",
        optionB: "медь",
        optionC: "лед",
        optionD: "ведро",
        correctOption: "optionC"
    },

    {
        question: "Выразите длину тела, равную 20 м, в миллиметрах и километрах. ?",
        optionA: "20 000 мм; 0,02 км",
        optionB: "2000 мм; 0,02 км",
        optionC: "20 000 мм; 0,2 км",
        optionD: "2000 мм; 0,2 км",
        correctOption: "optionD"
    },

    {
        question: "Чем отличаются молекулы в куске свинца от молекул в расплавленном свинце? ?",
        optionA: "ничем",
        optionB: "числом атомов",
        optionC: "свойствами",
        optionD: "размерами",
        correctOption: "optionA"
    },

    {
        question: "К веществам относятся ?",
        optionA: "карандаш",
        optionB: "графит",
        optionC: "масло",
        optionD: "бутылка",
        correctOption: "optionD"
    },

    {
        question: "К физическим телам относятся?",
        optionA: "бабочка",
        optionB: "вертолет",
        optionC: "сыр",
        optionD: "бронза",
        correctOption: "optionB"
    },

    {
        question: "Температура — это?",
        optionA: "признак нагретости тела",
        optionB: "величина, характеризующая нагретость тела",
        optionC: "физическое явление",
        optionD: "среди ответов нет верного",
        correctOption: "optionB"
    },

    {
        question: "Чем объясняется малая сжимаемость твердых тел ?",
        optionA: "быстрым движением их молекул",
        optionB: "очень малым размером молекул",
        optionC: "плотной упаковкой молекул",
        optionD: "хаотичностью движения молекул",
        correctOption: "optionB"
    },

    {
        question: "Что служит источником физических знаний ?",
        optionA: "измерения",
        optionB: "наблюдения и опыты",
        optionC: "только наблюдения",
        optionD: "только опыты",
        correctOption: "optionC"
    },

    {
        question: "К физическим телам относятся ?",
        optionA: "сок",
        optionB: "здание",
        optionC: "песок",
        optionD: "вилка",
        correctOption: "optionC"
    },

    {
        question: "К веществам относится ?",
        optionA: "провод",
        optionB: "медь",
        optionC: "лед",
        optionD: "ведро",
        correctOption: "optionC"
    },

    {
        question: "Выразите длину тела, равную 20 м, в миллиметрах и километрах. ?",
        optionA: "20 000 мм; 0,02 км",
        optionB: "2000 мм; 0,02 км",
        optionC: "20 000 мм; 0,2 км",
        optionD: "2000 мм; 0,2 км",
        correctOption: "optionD"
    },

    {
        question: "Чем отличаются молекулы в куске свинца от молекул в расплавленном свинце? ?",
        optionA: "ничем",
        optionB: "числом атомов",
        optionC: "свойствами",
        optionD: "размерами",
        correctOption: "optionA"
    },

    {
        question: "К веществам относятся ?",
        optionA: "карандаш",
        optionB: "графит",
        optionC: "масло",
        optionD: "бутылка",
        correctOption: "optionD"
    },

    {
        question: "К физическим телам относятся?",
        optionA: "бабочка",
        optionB: "вертолет",
        optionC: "сыр",
        optionD: "бронза",
        correctOption: "optionB"
    },

    {
        question: "Температура — это?",
        optionA: "признак нагретости тела",
        optionB: "величина, характеризующая нагретость тела",
        optionC: "физическое явление",
        optionD: "среди ответов нет верного",
        correctOption: "optionB"
    },
]


let shuffledQuestions = [] //пустой массив для хранения перетасованных выбранных вопросов

function handleQuestions() { 
    //функция перемешивания и добавления 10 вопросов в массив перемешанных вопросов
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// функция для отображения следующего вопроса в массиве
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //получает текущий вопрос
    const currentQuestionAnswer = currentQuestion.correctOption //получает ответ на текущий вопрос
    const options = document.getElementsByName("option"); //получает все элементы с именем 'option' (в этом случае вводится соотношение)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //ввводит правильное соотношение с правильным ответом
            correctOption = option.labels[0].id
        }
    })
   
    //проверка, чтобы убедиться, что радиовход был проверен или выбран параметр
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //проверка, совпадает ли установленный переключатель с ответом
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //установливает задержку номера вопроса до загрузки следующего вопроса
            setTimeout(() => {
                questionNumber++
            }, 800)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //установливает задержку номера вопроса до загрузки следующего вопроса
            setTimeout(() => {
                questionNumber++
            }, 800)
        }
    })
}



//вызывается при выборе следующей кнопки
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //задерживает отображение следующего вопроса на секунду
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//возвращает параметрам background значение null после отображения правильных/ неправильных цветов
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// снимает все переключатели для следующего вопроса (также можно выполнить с помощью map или foreach loop)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// функция для получения ответов на все вопросы
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // проверка состояния для замечания игроку и цвета замечания
    if (playerScore <= 6) {
        remark = "Прохо. Нужно ещё поучить."
        remarkColor = "red"
    }
    else if (playerScore >= 12 && playerScore < 7) {
        remark = "Хороший результат. Но можно лучше."
        remarkColor = "orange"
    }
    else if (playerScore >= 16) {
        remark = "Отлично! Твои знания на высоте."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //данные для отображения на табло
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//закрывает режим подсчета очков и сбрасывает игру
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//функция для закрытия предупреждения
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
