//level latihan codewars 8kyu
//versi simple
function sumArray(array) {
  if (array === null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b);
  let res = 0;

  for (i = 1; i < sorted.length - 1; i++) {
    res += sorted[i];
  }
  return res;
}
