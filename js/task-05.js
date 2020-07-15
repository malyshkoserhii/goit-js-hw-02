"use strict"

const checkForSpam = function(message) {

    
    const string = message.split(' ');
    console.log(string);
    const spam = 'spam'.toLocaleLowerCase;
    const sale = 'sale'.toLocaleLowerCase;
    const request = message.includes(spam);
    const request2 = message.includes(sale);
    return request2;
 };
  


  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true