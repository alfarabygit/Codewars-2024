//level latihan codewars 8kyu
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "Rock" && p2 === "Scissors") {
    return "Player 1 Won!";
  } else if (p1 === "Scissors" && p2 === "Paper") {
    return "Player 1 Won!";
  } else if (p1 === "Paper" && p2 === "Rock") {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
};

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   if ((p1 === "Rock" && p2 === "Scissors") || (p1 === "Scissors" && p2 === "Paper") || (p1 === "Paper" && p2 === "Rock")) {
//     return "Player 1 Won!";
//   } else {
//     return "Player 2 Won!";
//   }
// };
