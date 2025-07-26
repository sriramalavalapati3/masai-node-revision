let studentsData = [  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]


let studentsScoredAbove60 = studentsData.filter(student => student.marks > 60);
let sortStudents = studentsData.sort((a,b) =>{
  return b.marks - a.marks;
})
let studentNames = studentsData.map(student => student.name).sort((a,b) => a.localeCompare(b)   );



console.log("Students who scored above 60:");
console.log(studentsScoredAbove60);
console.log("Students sorted by marks (highest to lowest):");
console.log(sortStudents);
console.log("Student Names (sorted alphabetically):");
console.log(studentNames);