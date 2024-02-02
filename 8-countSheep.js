//level latihan codewars 8kyu
/*
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
};

var countSheep = function (num) {
  return [...Array(num)].map((_, i) => `${i} + 1 sheep...`).join("");
};
*/

//one line version
const countSheep = (num) => [...Array(num)].map((_, i) => `${i} + 1 sheep...`).join("");
