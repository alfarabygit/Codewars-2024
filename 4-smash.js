//normal function
// function smash(words) {
//   return words.join(" ");
// }

//one line function
// const smash = (words) => words.join(" ");

// console.log(smash(["hello", "amazing", "world"]), "hello amazing world");

//loop through
function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i != words.length - 1) {
      result += " ";
    }
  }
  return result;
}
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
