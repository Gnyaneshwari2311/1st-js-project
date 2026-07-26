//Mini Project (Interview Level)
console.log("------Employee Management-----");

let employeeData = [
 {
 name: "Gnyaneshwari",
 role: "Software Developer",
 salary: 45000,
 attendance: "30 days"
 },
 {
 name: "Archana",
 role: "tester",
 salary: 46000,
 attendance: "28 days"
 },
 {
 name: "Rohit",
 role: "Software Developer",
 salary:55000,
 attendance: "29 days"
 },
 {
 name: "Vanita",
 role: "Software Developer",
 salary: 45000,
 attendance: "28 days"
 }
];
let choices = prompt("Enter your choice:");
switch (choices) {
 case "1":
 console.log("Add Employee");
 break;
 case "2":
 console.log("Show Employee Details");
 for (let employee of employeeData) {
 console.log(`Name: ${employee.name}`);
 console.log(`Role: ${employee.role}`);
 console.log(`Salary: ${employee.salary}`);
 }
 break;
 case "3":
 console.log("Calculate Bonus");
 for (let employee of employeeData) {
 let bonus = 0;
 if (employee.salary > 50000) {
 bonus = 10000;
 } else if (employee.salary > 30000) {
 bonus = 5000;
 } else {
 bonus = 2000;
 }
 console.log(`Bonus for ${employee.name}: ${bonus}`);
 }
 break;
 case "4":
 console.log("Check Attendance");
 for (let employee of employeeData) {
 if (employee.attendance === "present") {
 console.log(`${employee.name} is working`);
 }
 else {
 console.log(`${employee.name} is leave`);
 }
 }
 break;
 case "5":
 console.log("Print Salary");
 for (let employee of employeeData) {
 console.log(`${employee.name} salary is ${employee.salary}`);
 }
 break;
 case "6":
 console.log("Exit");
 break;
 default:
 console.log("Invalid Choice");
}