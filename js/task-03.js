"use strict";

let word;
let wordLength = 1;

const findLongestWord = function (string) {
  const words = string.split(" ");

  for (word of words) {
    const i = word.length;

    if (wordLength < i) {
      wordLength = i;
      break;
    }

    console.log(i);
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
