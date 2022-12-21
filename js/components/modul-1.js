// ================ task 1 ==========================

// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
//
const formNumber = document.getElementById("formNumber");
const containerYear = document.getElementById("containerYear");

formNumber.addEventListener("input", onFormNumber);

const divEl = document.createElement("div");
formNumber.appendChild(divEl);

function onFormNumber(e) {
  const numberYear = Number(e.target.value);
  const lengthYear = e.target.value.length;

  if (lengthYear === 4) {
    if (numberYear % 4 === 0) {
      divEl.textContent = "ВІТАЄМО Ви народилися в високосний рік";
      divEl.style.color = "green";
      return;
    } else {
      divEl.textContent = "Нажаль Ви народилися в звичайний рік";
      divEl.style.color = "red";
      return;
    }
  }
  divEl.style.color = "";
  divEl.textContent = "";
}

// ======================================

// ============== task 2 ================

// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

const formNumbers = document.getElementById("formNumbers");
const yorNumber = document.getElementById("quantityComp");
const inTv = document.querySelector(".tv__in");
const tv = document.querySelector(".tv");

formNumbers.addEventListener("input", onYorNumber);

function onYorNumber(e) {
  const numberComputer = Math.floor(Math.random() * 10);
  const color = "aqua";
  const number = Number(e.target.value);

  if (inTv.textContent === "?") {
    if (number === numberComputer) {
      inTv.textContent = numberComputer;
      tv.style.backgroundColor = "green";
    } else {
      inTv.textContent = numberComputer;
      tv.style.backgroundColor = "red";
    }
  } else {
    inTv.textContent = "?";
    tv.style.backgroundColor = color;
  }
}
// ======================================

// ============== task 3 ================

const mathAction = document.getElementById("mathAction");
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const result = document.querySelector(".result");
const resultDisplay = document.querySelector(".result-display");

mathAction.addEventListener("click", onMathAction);

function onMathAction(e) {
  if (!e.target.classList.contains("calculations")) {
    return;
  }

  const currentActiveSign = document.querySelector(".active");

  if (currentActiveSign) {
    currentActiveSign.classList.remove("active");
  }
  e.target.classList.add("active");
}

result.addEventListener("click", onResult);

function onResult(e) {
  // проверка на наличие чисел в инпуте
  if (!firstNumber.value.trim() || !secondNumber.value.trim()) {
    resultDisplay.textContent = "Заполните поля для чисел";
    return;
  }

  const currentActiveSign = document.querySelector(".active");
  if (!currentActiveSign) {
    resultDisplay.textContent = "Выбирите действие";
    return;
  }

  const mathSign = currentActiveSign.textContent;
  const firstNumberValue = Number(firstNumber.value);
  const secondNumberValue = Number(secondNumber.value);

  if (mathSign === "+") {
    const result = firstNumberValue + secondNumberValue;
    resultDisplay.textContent = `Сумма чисел ${firstNumberValue} и ${secondNumberValue} будет ${result}`;
  } else if (mathSign === "-") {
    const result = firstNumberValue - secondNumberValue;
    resultDisplay.textContent = `Разница чисел ${firstNumberValue} и ${secondNumberValue} будет ${result}`;
  } else if (mathSign === "*") {
    const result = firstNumberValue * secondNumberValue;
    resultDisplay.textContent = `Произведение числа ${firstNumberValue} на ${secondNumberValue} будет ${result}`;
  } else if (mathSign === "/") {
    if (secondNumberValue === 0) {
      resultDisplay.textContent = "На ноль делить нельзя";
    } else {
      const result = firstNumberValue / secondNumberValue;
      resultDisplay.textContent = `Деление числа ${firstNumberValue} на ${secondNumberValue} будет ${result}`;
    }
  }
}

// ======================================

// ============== task-4  ================
// формула конвертации цельсия в фаренгейт  (0 °C × 9/5) + 32 = 32 °F
// формула конвертации фаренгейт в цельсия  (32 °F − 32) × 5/9 = 0 °C

const inputCelsius = document.querySelector(".celsius");
const inputFahrenheit = document.querySelector(".fahrenheit");
const btnDegress = document.querySelector(".degrees__btn");
const formDegress = document.querySelector(".degrees__form");
const btnReset = document.querySelector(".degrees__btn-reset");

btnDegress.addEventListener("click", onBtnDegress);

const divElem = document.createElement("div");
divElem.style.color = "red";
formDegress.appendChild(divElem);

function onBtnDegress(e) {
  const valueCelsius = Number(inputCelsius.value);
  const valueFahrenheit = Number(inputFahrenheit.value);

  if (inputCelsius.value.trim()) {
    if (!divElem.textContent === "") {
      return;
    }
    divElem.textContent = "";
    const resultFahrenheit = (valueCelsius * 9) / 5 + 32;
    inputFahrenheit.value = resultFahrenheit;
    return;
  }

  if (inputFahrenheit.value.trim()) {
    if (!divElem.textContent === "") {
      return;
    }
    divElem.textContent = "";
    const resultCelsius = ((valueFahrenheit - 32) * 5) / 9;
    inputCelsius.value = resultCelsius;
  }
}

btnReset.addEventListener("click", onBtnReset);

function onBtnReset(e) {
  if (!inputCelsius.value.trim() && !inputFahrenheit.value.trim()) {
    return;
  }
  inputCelsius.value = "";
  inputFahrenheit.value = "";
}

// ======================================

// ============== task-5  ================
// Написать программу, которая проверяет введенное число попадает в диапазон от 55 до 99 включительно

const numberContainer = document.querySelector(".number");
const enterNumber = document.querySelector(".number__enter");

const buttonNumber = document.createElement("button");
buttonNumber.textContent = "Жмакаем";
buttonNumber.style.marginTop = "10px";
numberContainer.appendChild(buttonNumber);

const textNumber = document.createElement("p");
numberContainer.appendChild(textNumber);

buttonNumber.addEventListener("click", onButtonNumber);

function onButtonNumber(e) {
  const valueInput = Number(enterNumber.value);

  if (enterNumber.value === "") {
    textNumber.textContent = "Незабываем вводить число";
    return;
  }
  if (valueInput >= 55 && valueInput <= 99) {
    textNumber.textContent = `Ваше число ${valueInput} попадает в диапазон от 55 до 99 включительно`;
    return;
  }
  textNumber.textContent = `Ваше число ${valueInput} не попадает в заданный диапазон от 55 до 99 включительно`;
  return;
}

// ======================================

// ============== task-6  ================
// Написать программу где пользователь вводит 3 числа, после ввода всех трех цифр ему на экране показывается больше из них. Дополнительно проверять это вообще числа

const numbers = document.querySelector(".three-numbers");
const firstInput = document.querySelector(".first");
const secondInput = document.querySelector(".second");
const thirdInput = document.querySelector(".third");

numbers.addEventListener("input", onInput);

const divElement = document.createElement("div");
divElement.style.marginTop = "10px";
numbers.appendChild(divElement);

function onInput(e) {
  const value = Number(e.target.value);
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  const thirdValue = Number(thirdInput.value);

  if (Number.isNaN(value)) {
    divElement.textContent = "Значение должно быть числом";
    divElement.style.color = "red";
    return;
  }
  divElement.textContent = "";
  divElement.style.color = "black";
  if (
    firstInput.value === "" ||
    secondInput.value === "" ||
    thirdInput.value === ""
  ) {
    return;
  }
  const maxNumber = Math.max(firstValue, secondValue, thirdValue);
  divElement.textContent = `${maxNumber} - НАИБОЛЬШЕЕ ЗНАЧЕНИЕ`;
  return;
}

// ======================================

// ============== task-7  ================
// Написать программу, которая переведет введенный оценку студента
// к Болонскому формата 89 - 100 это A 75 - 88 это В 60 - 74
// это С 45 - 59 это D 20 - 44 это Е до 20 это F

const formatGrade = document.querySelector(".format-grade");
const inputGrade = document.querySelector(".format-grade__input");
const btnFormat = document.querySelector(".format-grade__btn");

const divGrade = document.createElement("div");
formatGrade.appendChild(divGrade);

const onBtnFormat = (e) => {
  const val = Number(inputGrade.value);
  let gradeBolognes;

  if (inputGrade.value === "" || inputGrade.value > 100) {
    divGrade.textContent = "Ваша оценка должна быть от 0 до 100";
    return;
  }
  if (val >= 0 && val < 20) {
    gradeBolognes = "F";
  } else if (val > 19 && val < 45) {
    gradeBolognes = "E";
  } else if (val > 44 && val < 60) {
    gradeBolognes = "D";
  } else if (val > 59 && val < 75) {
    gradeBolognes = "C";
  } else if (val > 74 && val < 89) {
    gradeBolognes = "B";
  } else if (val > 88 && val <= 100) {
    gradeBolognes = "A";
  }
  divGrade.textContent = `В Болонском формате ваша оценка "${gradeBolognes}" `;
  return;
};

btnFormat.addEventListener("click", onBtnFormat);

// ======================================

// ============== task-8 ================
// Написать программу, которая получит от пользователя число(количество минут)
// и выведет на экран строку в формате часы и минуты Пример 70 покажет 1: 10
// 450 покажет 7: 30 1441 покажет 24: 1

const timeInput = document.querySelector(".input-minutes");
const outputText = document.querySelector(".number-minutes__text");

outputText.style.fontSize = "30px";

timeInput.addEventListener("input", onTimeInput);

function onTimeInput(e) {
  const numberMinutes = Number(e.target.value);
  const numberHours = numberMinutes / 60;

  const days = Math.floor(numberHours / 24);
  const hours = Math.floor(numberHours % 60);
  const modHours = String(hours).padStart(2, 0);
  const minutes = numberMinutes % 60;
  const modMinutes = String(minutes).padStart(2, 0);

  outputText.textContent = `${days} дн.  ${modHours} : ${modMinutes}`;
}

// ======================================

// ============== task 9 ================

const images = [
  {
    src: "./images/stone.png",
    description: "stone",
  },
  {
    src: "./images/scissors.png",
    description: "scissors",
  },
  {
    src: "./images/paper.png",
    description: "paper",
  },
  {
    src: "./images/well.png",
    description: "well",
  },
];

const containerGame = document.querySelector(".game");
const listImages = document.querySelector(".game__list-images");
const imagesMarkup = createImagesMarkup(images);

// создание разметки
listImages.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(images) {
  return images
    .map(({ src, description }) => {
      return `<li class="game__item-image}">
      <div class="game__img-container" data-name="${description}">
    <img
    class="game__img-user js-img"
    src="${src}"
    alt="${description}"
    />
    </div >
    </li>`;
    })
    .join("");
}

containerGame.addEventListener("click", onContainerGame);

function onContainerGame(e) {
  const curentClick = e.target;
  const activeImgUser = document.querySelector(".active-user");
  const questionMark = document.querySelector(".question-mark");
  const imgComp = document.querySelector(".img-comp");
  const imgCompContainer = document.querySelector(".game__img-comp");
  // const imgUserContainer = document.querySelector(".game__img-container");

  // добавление картинки от бота с проверкой выбрана ли картинка пользователем
  if (curentClick.classList.contains("question-mark") && activeImgUser) {
    questionMark.classList.add("hidden");
    imgComp.classList.remove("hidden");
    const randomImg = images[Math.floor(Math.random() * images.length)];
    const src = randomImg.src;
    const descrImgBot = randomImg.description;
    imgComp.src = `${src}`;
    imgComp.alt = `${descrImgBot}`;

    const descrImgUser = activeImgUser.dataset.name;

    let combination = `${descrImgUser} - ${descrImgBot}`;
    switch (combination) {
      case "stone - stone":
      case "paper - paper":
      case "scissors - scissors":
      case "well - well":
        addClassDrawUser();
        addClassDrawBot();
        break;
      case "stone - scissors":
      case "paper - stone":
      case "paper - well":
      case "scissors - paper":
      case "well - scissors":
      case "well - stone":
        activeImgUser.classList.add("win");
        imgCompContainer.classList.add("losing");
        break;
      case "scissors - stone":
      case "stone - paper":
      case "well - paper":
      case "paper - scissors":
      case "scissors - well":
      case "stone - well":
        activeImgUser.classList.add("losing");
        imgCompContainer.classList.add("win");
        break;
    }
  }

  //  проверка кликаем ли мы в картинку пользователя
  if (!curentClick.classList.contains("game__img-user")) {
    return;
  }

  // выбор картинки пользователем с проверкой на удаление картинки от бота
  if (activeImgUser) {
    activeImgUser.classList.remove("active-user");

    // удаление картинки бота
    if (questionMark.classList.contains("hidden")) {
      questionMark.classList.remove("hidden");
      imgComp.classList.add("hidden");
      activeImgUser.classList.value = "game__img-container";
      imgCompContainer.classList.value = "game__img-comp";
    }
  }
  curentClick.parentNode.classList.add("active-user");

  function addClassDrawUser() {
    activeImgUser.classList.add("draw");
  }
  function addClassDrawBot() {
    imgCompContainer.classList.add("draw");
  }
}


// ======================================

// ============== task  ================
// Прошу - https://github.com/goitacademy/parcel-project-template )
// https://www.youtube.com/watch?v=QnXYP0L_MXo&t=1215s
//
