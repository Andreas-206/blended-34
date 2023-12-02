//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const btnRef = document.querySelector('#alertButton');
const inputRef = document.querySelector('#alertInput');

btnRef.addEventListener('click', () => {
    console.log(inputRef.value);
});

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const leftSwapInputEl = document.querySelector('#leftSwapInput');
const rightSwapInputEl = document.querySelector('#rightSwapInput');
const btnTask2EL = document.querySelector('#swapButton');

btnTask2EL.addEventListener('click', () => {
    const leftInputText = leftSwapInputEl.value;
    leftSwapInputEl.value = rightSwapInputEl.value;
    rightSwapInputEl.value = leftInputText;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passwordInputRef = document.querySelector('#passwordInput');
const passwordButtonRef = document.querySelector('#passwordButton');
passwordButtonRef.addEventListener('click', () => {
    if (passwordButtonRef.textContent === 'Приховати') {
        passwordButtonRef.textContent = 'Розкрити';
        passwordInputRef.setAttribute('type', 'password');
    } else {
        passwordButtonRef.textContent = 'Приховати';
        passwordInputRef.setAttribute('type', 'text');
    }
});
//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxRef = document.querySelector('#box');
const decreaseRef = document.querySelector('#decrease');
const increaseRef = document.querySelector('#increase');

decreaseRef.addEventListener('click', () => {
    const size = getComputedStyle(boxRef).width;
    boxRef.style.width = parseInt(size) - 10 + 'px';
    boxRef.style.height = parseInt(size) - 10 + 'px';
});

increaseRef.addEventListener('click', () => {
    const size = getComputedStyle(boxRef).width;
    boxRef.style.width = parseInt(size) + 10 + 'px';
    boxRef.style.height = parseInt(size) + 10 + 'px';
});

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const btnDoubleEl = document.querySelector('#double');
const listItemsEl = document.querySelectorAll('.listItem');

btnDoubleEl.addEventListener('click', () => {
    listItemsEl.forEach((liItem) => {
        liItem.textContent = BigInt(liItem.textContent) ** 2n;
    });
});

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
