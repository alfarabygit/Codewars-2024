//level latihan codewars 8kyu
// function points(games) {
//   return games
//     .map((game) => {
//       const [x, y] = game.split(":").map((s) => parseInt(s));
//       if (x > y) return 3;
//       if (x < y) return 0;
//       return 1;
//     })
//     .reduce((total, currentValue) => total + currentValue);
// }

//versi wpu
function points(games) {
  let res = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      res += 3;
    } else if (games[i][0] > games[i][2]) {
      res += 1;
    }
  }
  return res;
}
