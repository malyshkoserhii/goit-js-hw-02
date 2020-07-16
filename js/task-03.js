"use strict";

// Кожний рядок розбити в масив
// В кожного елементу масивуб тобто в слова можна подивитися довжину
// Кожний елемент масиву = слово

const findLongestWord = function (string) {
  const words = string.split(" ");
  const longestWord = words[0].length;
  console.log('longestWorld', longestWord);
  console.log('Масив', words);
  for (let i = 0; i < words.length; i += 1) {
    let length = words[i].length;
    for(let j = 0; j < length; j += 1) {
      
      console.log(j);
    }


    console.log('Слово - елемент масиву', words[i]);
    console.log('Довжина слова', length);
    if (length > longestWord) {
      length = longestWord;
    }
  }

  // const length = words.length;
  // console.log(length);
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
