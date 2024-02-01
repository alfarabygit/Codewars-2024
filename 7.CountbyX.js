//level latihan codewars 8kyu

//simple function
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

//with spread operator
// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i + 1) * x);
// }

//with one line
const countBy = (x, n) => [...Array(n)].map((__, i) => (i + 1) * x);
