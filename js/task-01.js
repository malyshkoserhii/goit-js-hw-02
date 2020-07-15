"use strict"

const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
let number = 0;

const logItems = function(array) {
   for(const item of array) {
       number += 1;
       console.log(`${number} - ${item}`);
   }   
}

logItems(array);