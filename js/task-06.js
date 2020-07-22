"use strict";

let number;
let total = 0;
const numbers = [];

do {
  number = prompt("Введіть число");
  if (isNaN(Number(number))) {
    alert("Було введено не число, будь ласка, спробуйте ще раз");
    continue;
  } else {
    numbers.push(number);
  }
} while (number !== null);

for (number of numbers) {
  total += +number;
}

console.log(`Загальна сума: ${total}`);
