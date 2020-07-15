"use strict";

const formatString = function (string) {
  let visibleContent;
  const content = string.split("");
  const maxLength = 40;
  const dots = ["..."];

  if (content.length > maxLength) {
    visibleContent = content.splice(0, 40).concat(dots).join("");
  } else {
    visibleContent = content.join("");
  }

  return visibleContent;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
