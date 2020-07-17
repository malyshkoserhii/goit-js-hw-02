"use strict";

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWorld = words[0];
  for (let i = 0; i < words.length; i += 1) {
    let length = words[i].length;
    if (length > longestWorld.length) {
      longestWorld = words[i];
    }
  }

  return longestWorld;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
