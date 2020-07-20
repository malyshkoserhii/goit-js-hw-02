"use strict";

const sum = function (figures) {
  let input;
  let total = 0;
  do {
    const numbers = [];

    input = prompt("Було введено не число, будь ласка, спробуйте ще раз");
    numbers.push(input);

    if (isNaN(Number(input))) {
      alert("Ви не ввели число");
      continue;
    } else {
      for (let i = 0; i < numbers.length; i += 1) {
        total += +numbers;
      }
    }
  } while (input !== null);

  return `Загальна сума: ${total}`;
};

console.log(sum());
