//level latihan codewars 8kyu
//versi simple

// function getAverage(marks) {
//TODO : calculate the downward rounded average of the marks array
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

//versi one line
function getAverage(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}
