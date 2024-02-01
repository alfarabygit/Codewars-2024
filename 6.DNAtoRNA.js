//level latihan codewars 8kyu

//simple version
// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

//with ternary operator
// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === "T" ? "U" : dna[i];
//   }
//   return rna;
// }

//one line code
const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : dna[i]))
    .join("");

//with replace method
/*
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
  return dna.replaceAll('T','U');
}
*/
