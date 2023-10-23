/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const answear = prompt("Яка офіційна назва JavaScript?")
// if (answear === "ECMAScript") { alert("Вірно!");

// } else { alert("Не знаєте? ECMAScript!");

// }

// console.log(answear);

/* Task 2 */

/*
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const count = prompt("Ввидіть хлевини");
// const hour = String(Math.floor(count / 60)).padStart(2,"0");
// const minuts = String(count % 60).padStart(2,"0");
// console.log(`${hour}:${minuts}`);

/* Task 3 */

// function calcResalt(namber) {
//   let sum = 0;
//   for (let i = 0; i <= namber; i++) {
//     console.log(sum, i);
//     sum += i;
//   }
//   return sum;
// }
// console.log(calcResalt(3));
/**
 * 
 * 
//  task-4
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 *
 */
let total = 0;
let messege = prompt("ввести число");
while (messege !== null) {
total += Number(messege);
messege = prompt("ввести число");
}
console.log(`Загальна сума введених чисел дорівнює ${total}`);
