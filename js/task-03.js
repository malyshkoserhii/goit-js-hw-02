"use strict";

// Кожний рядок розбити в масив
// В кожного елементу масивуб тобто в слова можна подивитися довжину
// Кожний елемент масиву = слово

// Як показати найдовше слово якщо ми знаємо його довжину?

const findLongestWord = function (string) {
  const words = string.split(" ");
  let wordLength = words[0].length;
  console.log(
    "Припускаємо, що перше слово масиву найдовше, тобто longestWorld",
    wordLength
  );
  console.log("Масив", words);
  for (let i = 0; i < words.length; i += 1) {
    let length = words[i].length;
    if (length > wordLength) {
      wordLength = length;
    }
    console.log("words[i] - Слово-елемент масиву [words]", words[i]);
    console.log("lenght - Довжина цього слова", length);
  }

  console.log(`Найдовше слово має   ${wordLength}   символів`);

  return wordLength;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
