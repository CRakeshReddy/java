// Task 1: Employee Salary Dashboard

const employees = [
  { id: 101, name: "Rahul", salary: 45000 },
  { id: 102, name: "Arun", salary: 60000 },
  { id: 103, name: "Kamal", salary: 120000 },
  { id: 104, name: "Priya", salary: 75000 },
  { id: 105, name: "Sneha", salary: 50000 }
];

const highSalaryEmployees = employees.filter(
  employee => employee.salary > 50000
);

console.log("\n===== Employees with Salary > ₹50,000 =====");
highSalaryEmployees.forEach(employee => {
  console.log(`${employee.name} - ₹${employee.salary}`);
});

const topEmployee = employees.find(
  employee => employee.salary > 100000
);

console.log("\n===== First Employee with Highest Salary > ₹1,00,000 =====");
console.log(`${topEmployee.name} - ₹${topEmployee.salary}`);

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log("\n===== Total Salary Expense =====");
console.log(`₹${totalSalary}`);



// Task 2: E-Commerce Cart Management

const cart1 = ["Laptop", "Mouse", "Keyboard"];
const cart2 = ["Monitor", "Headphones"];

const cart = [...cart1, ...cart2];

const newCart = [...cart, "Webcam"];

function checkout(...products) {
    console.log("Total Products:", products.length);
}

console.log(cart);
console.log(newCart);
checkout(...newCart);





// Task 3: Student Report Card

const student = {
  name: "ROcky",
  department: "ECE",
  marks: [85, 90, 78]
};

const { name, department, marks } = student;

const [subject1, subject2, subject3] = marks;

const totalMarks = subject1 + subject2 + subject3;
const averageMarks = totalMarks / 3;

console.log("Student Name :", name);
console.log("Department   :", department);
console.log("Total Marks  :", totalMarks);
console.log("Average Marks:", averageMarks);



// Task 4: Product Search System

let search = "   Laptop   ";

let product = "Gaming Laptop with 16GB RAM";

search = search.trim();

let searchText = search.toLowerCase();
let productText = product.toLowerCase();

console.log("Product Found:", productText.includes(searchText));

let highlightedProduct = product.replace(search, `**${search}**`);

console.log("Product:", highlightedProduct);




// Task 5: Movie Collection Manager

let movies = [
  { name: "RRR", rating: 4.2 },
  { name: "Pushpa", rating: 4.5 },
  { name: "Salaar", rating: 3.8 }
];

movies.push({ name: "Kalki", rating: 4.8 });
movies.pop();
movies.shift();
movies.unshift({ name: "Bahubali", rating: 5.0 });
movies.splice(1, 1, { name: "Devara", rating: 4.5 });
movies.sort((a, b) => b.rating - a.rating);

console.log(
  "Movie Exists:",
  movies.some(movie => movie.name === "Salaar")
);

movies.forEach(movie => {
  console.log(movie.name, movie.rating);
});