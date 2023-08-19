const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

const studentAverages = students.map((student) => {
  // console.log(student);
  const sum = student.scores.reduce((acc, score) => acc + score);
  return { name: student.name, average: sum / student.scores.length };
});
console.log(studentAverages);
const highPerformers = studentAverages.filter(
  (student) => student.average > 90
);
console.log(highPerformers);
