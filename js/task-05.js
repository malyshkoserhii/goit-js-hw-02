"use strict";

const checkForSpam = function (message) {
  const content = message.toLocaleLowerCase();
  console.log(content);

  return content.includes("spam") || content.includes("sale");
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
