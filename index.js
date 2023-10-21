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

const count = prompt("Ввидіть хлевини");
const hour = String(Math.floor(count / 60)).padStart(2,"0");
const minuts = String(count % 60).padStart(2,"0");
console.log(`${hour}:${minuts}`);
