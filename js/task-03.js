"use strict";

// Кожний рядок розбити в масив
// В кожного елементу масивуб тобто в слова можна подивитися довжину
// Кожний елемент масиву = слово

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0].length;
  console.log('Припускаємо, що перше слово масиву найдовшеб тобто longestWorld', longestWord);
  console.log('Масив', words);
  for (let i = 0; i < words.length; i += 1) {
    let length = words[i].length;
    if(length > longestWord) {
      longestWord = length;
    }

    // for(let j = 0; j < length; j += 1) {
    //   if(j > longestWord) {
    //     j = longestWord;
    //     break;
    //   }
    //   console.log('j', j);
    // }

    console.log('words[i] Слово - елемент масиву', words[i]);
    console.log('lenght - Довжина слова', length);
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
