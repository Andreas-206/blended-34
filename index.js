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
// let total = 0;
// let messege = prompt("ввести число");
// while (messege !== null) {
// total += Number(messege);
// messege = prompt("ввести число");
// }
// console.log(`Загальна сума введених чисел дорівнює ${total}`);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };

//   user.mood = "happy";
//   user.hobby = "skydiving";
//   user.premium = false;

//  const keys = Object.keys(user);
//  for (const key of keys) {
//     console.log(`${key}: ${user.[key]}` );
//  }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників!!. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function culcSalaries(obj) {
//   let sum = 0;
//   for (const value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// }
/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(someStones, stoneName) {
//   for (const stone of someStones) {
//     if (stoneName === stone.name) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Такого каменю немає!";
// }
// console.log(calcTotalPrice(stones, "рлорп"));
///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];
// function updateFruits(arr) {
//   //   const copy = [...arr];
//   const frutAll = [];
//   let id = 1;
//   for (const frut of arr) {
//     const newFruit = { ...frut };
//     newFruit.price = newFruit.price * 0.8;
//     newFruit.id = id;
//     frutAll.push(newFruit);
//     id += 1;
//   }
//   return frutAll;
// }

// function updateFruits(arr) {
//   //   const copy = [...arr];
//   const frutAll = [];
//   let id = 1;
//   for (const frut of arr) {
//     const newFruit = {
//       ...frut,
//       price: frut.price * 0.8,
//       id,
//     };

//     frutAll.push(newFruit);
//     id += 1;
//   }
//   return frutAll;
// }
// const result = updateFruits(fruits);

// console.log(result);
// console.log(fruits);

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function newFruits(arr) {
//   return arr.map((fruit, index) => {
//     return {
//       ...fruit,
//       price: fruit.price * 0.8,
//       id: index + 1,
//     };
//   });
// }
// console.log(newFruits(fruits));

// function newFruits(arr) {
//   return arr.map((fruit, index) => ({
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: index + 1,
//   }));
// }



/**
*? Напиши функцію конструктор User для 
*? створення користувача з такими властивостями:
*? a. userName - ім'я, рядок
*? b. age - вік, число
*? c. numbersOfPost - кількість постів, число
*? d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

*? Додай метод getInfo(), який повертає рядок:
*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

 */

// const User = function (userObject) {
//   this.userName = userObject.name;
//   this.age = userObject.age;
//   this.numbersOfPost = userObject.numbers;

//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   };
// };
// // Правильне створ методу
// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
// };
// const user = new User({ name: "Tania", age: 22, numbers: 2 });
// console.log(user);

