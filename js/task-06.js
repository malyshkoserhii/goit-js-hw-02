
// 1. Варіант через Array.from для того щоб перетворити псевдомасив у масив
// const add = function () {
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(5, 5, 5));
// console.log(add(4, 5, 6));

// 2. Варіант через операцію rest (або збір) - більш новий та сучанисний
// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add (5, 6, 7));
// console.log(add (4, 5, 6));
