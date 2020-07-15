"use strict";

let number = 0;

const logItems = function (array) {
  for (const item of array) {
    number += 1;
    console.log(`${number} - ${item}`);
  }
};


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);