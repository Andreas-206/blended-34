//TODO:=============================================

/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями email email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const client = new Client("skdjks", "125");
// console.log(client.login);
console.log((client.login = "87"));

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(checkBrackets(someFn));

function checkBrackets(someFn) {
  const stack = [];
  const bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of someFn) {
    if (bracketsMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketsMap).includes(char)) {
      if (bracketsMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// function checkBrackets(str) {
//   const stack = [];
//   const obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let i = 0; i < str.length; i++) {
//     const bracket = str[i];
//     if (bracket === "(" || bracket === "{" || bracket === "[") {
//       stack.push(bracket);
//     }
//     if (bracket === "}" || bracket === ")" || bracket === "]") {
//       const lastEl = stack.pop();
//       if (bracket !== obj[lastEl]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }

// function checkBrackets(someFn) {
//   openBrackets = ["(", "{", "["];
//   closeBrackets = [")", "}", "]"];

//   const getCloseBracket = function (bracket) {
//     return closeBrackets[openBrackets.indexOf(bracket)];
//   };

//   currentBrackets = [];

//   for (i = 0; i <= someFn.length - 1; i++) {
//     currentSymbol = someFn[i];
//     if (openBrackets.includes(currentSymbol)) {
//       currentBrackets.push(currentSymbol);
//     } else if (closeBrackets.includes(currentSymbol)) {
//       if (currentBrackets.length) {
//         lastBracket = currentBrackets[currentBrackets.length - 1];
//         if (getCloseBracket(lastBracket) === currentSymbol) {
//           currentBrackets.pop();
//         } else {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }

//   return currentBrackets.length ? false : true;
// }
