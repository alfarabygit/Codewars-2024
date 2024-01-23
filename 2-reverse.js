// const reverseSeq = (n) => {
//   const res = [];
//   for (let i = n; i >= 1; i--) {
//     res.push(i);
//   }
//   return res;
// };

// reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// };

const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq(5));
