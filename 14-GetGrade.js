//level latihan codewars 8kyu
//versi simple
// function getGrade(s1, s2, s3) {
//   return { 10: "A", 9: "A", 8: "B", 7: "C", 6: "D" }[Math.floor((s1 + s2 + s3) / 30)] || "F";
// }

//versi barbar
function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;

  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}
