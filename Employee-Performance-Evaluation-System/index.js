let employees = [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];

let performanceReview = {
    "Excellent": 3,
  "Good": 2,
  "Needs Improvement": 1
};


let employeePerformance = employees.filter(employee => employee.tasksCompleted>5)
                          .map((employee) => {
                           return {
                            employeeName: employee.name,
                            performance: employee.rating>4.5 ? "Excellent" 
                            : employee.rating >= 3 && employee.rating <=4.5 ? "Good" 
                            : "Needs Improvement"
                           }
                          })
                          .sort((a,b) => performanceReview[b.performance] - performanceReview[a.performance]);

console.log("Employee Performance Review");
console.log(employeePerformance);