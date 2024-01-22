//normal function(declaration function)
// function grow(x) {
//   let result = x[0];

//   for (let a = 1; a < x.length; a++) {
//     result = result * x[a];
//   }
//   return result;
// }

//high order function
function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);
  return result;
}

//one line function
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
