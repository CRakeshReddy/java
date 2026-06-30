// Task 1 - Employee Login Eligibility

let age = Number(prompt("Enter Employee Age:"));
let hasID = prompt("Do you have an Employee ID? (true/false)") === "true";
let attendance = Number(prompt("Enter Attendance Percentage:"));

if (age >= 18 && hasID && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}



// Task 2 - Student Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade A");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade B");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



// Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance && withdraw % 100 === 0) {
    balance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + balance);
} else {
    console.log("Transaction Failed");
}



// Task 4 - Food Ordering App

let foodItem = prompt("Enter the food item you want to order (Pizza, Burger, Pasta):").toLowerCase();

switch (foodItem) {
    case "pizza":
        console.log("You have ordered a Pizza.");
        break;
    case "burger":
        console.log("You have ordered a Burger.");
        break;
    case "pasta":
        console.log("You have ordered Pasta.");
        break;
    default:
        console.log("Invalid food item selected.");
}



// Task 5 - E-Commerce Discount

let purchaseAmount = Number(prompt("Enter the purchase amount:"));

if (purchaseAmount >= 1000) {
    let discount = purchaseAmount * 0.1;
    let finalAmount = purchaseAmount - discount;
    console.log("Discount Applied: " + discount);
    console.log("Final Amount: " + finalAmount);
} else {
    console.log("No Discount Applied.");
}


// Task 6 - Attendance Report

for (let day = 1; day <= 30; day++) {
    console.log("Day " + day + " Present");
}


// Task 7 - Even Number Generator

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Task 8 - Mobile Number Validation

let mobileNumber = prompt("Enter your mobile number:");

if (
    mobileNumber.length === 10 &&
    (mobileNumber.startsWith("6") ||
     mobileNumber.startsWith("7") ||
     mobileNumber.startsWith("8") ||
     mobileNumber.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}



// Task 9 - Shopping Cart

let cart = [
    "Milk",
    "Bread",
    "Egg",
    "Oil"
];

console.log("First Item:", cart[0]);
console.log("Last Item:", cart[cart.length - 1]);
console.log("Total Items:", cart.length);



// Task 10 - Employee Database

let employee = {
    name: "Rakesh",
    salary: 50000,
    department: "IT",
    experience: 2
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Experience:", employee.experience);


// Task 11 - Company ID Generator

let name = "Rakesh";
let id = 1045;
let department = "Development";

console.log(`Welcome ${name}`);
console.log(`Your Employee ID is EMP${id}`);
console.log(`Department : ${department}`);



// Task 12 - User Registration

let a = prompt("Enter your  name:");
let b = prompt("Enter your age:");
let acceptTerms = confirm("Do you accept the Terms and Conditions?");

if (acceptTerms) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}


// Task 13 - Salary Increment Calculator

let salary = 35000;
let increment = 15;

let incrementAmount = (salary * increment) / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary:", salary);
console.log("Increment Amount:", incrementAmount);
console.log("New Salary:", newSalary);


// Task 14 - Restaurant Bill Generator

let biriyani = 150;
let vegCurry = 300;
let water = 20;

let subtotal = biriyani + vegCurry + water;
let gst = (subtotal * 18) / 100;
let grandTotal = subtotal + gst;

console.log("Subtotal:", subtotal);
console.log("GST (18%):", gst);
console.log("Grand Total:", grandTotal);



// Task 15 - Company Attendance Dashboard

let employees = {
    Mani: "Present",
    narapureddy: "Absent",
    yamini: "Present",
    rohith: "Present",
    rakesh: "Absent"
};

let presentCount = 0;
let absentCount = 0;

console.log("Present Employees:");
for (let name in employees) {
    if (employees[name] === "Present") {
        console.log(name);
        presentCount++;
    }
}

console.log("Absent Employees:");
for (let name in employees) {
    if (employees[name] === "Absent") {
        console.log(name);
        absentCount++;
    }
}

console.log("Total Present:", presentCount);
console.log("Total Absent:", absentCount);


// Employee Management System (Console Version)


let c = [
    { id: 101, name: "Rahul", department: "HR", salary: 30000, experience: 2 },
    { id: 102, name: "Priya", department: "IT", salary: 45000, experience: 5 }
];

let choice;

do {
    choice = Number(prompt(
        "===== Employee Management System =====\n" +
        "1. Add Employee\n" +
        "2. View All Employees\n" +
        "3. Search Employee by ID\n" +
        "4. Calculate Salary with Bonus\n" +
        "5. Check Experience Level\n" +
        "6. Delete Employee\n" +
        "7. Exit\n\n" +
        "Enter your choice:"
    ));

    switch (choice) {

        // Add Employee
        case 1:
            let id = Number(prompt("Enter Employee ID:"));
            let name = prompt("Enter Employee Name:");
            let department = prompt("Enter Department:");
            let salary = Number(prompt("Enter Salary:"));
            let experience = Number(prompt("Enter Experience (Years):"));

            c.push({
                id,
                name,
                department,
                salary,
                experience
            });

            alert("Employee Added Successfully!");
            break;

        // View All Employees
        case 2:
            console.log("===== Employee List =====");

            for (let emp of c) {
                console.log(
                    `ID: ${emp.id}
Name: ${emp.name}
Department: ${emp.department}
Salary: ${emp.salary}
Experience: ${emp.experience} Years`
                );
            }
            break;

        // Search Employee
        case 3:
            let searchId = Number(prompt("Enter Employee ID:"));
            let found = false;

            for (let e of c) {
                if (e.id === searchId) {
                    console.log(e);
                    found = true;
                }
            }

            if (!found) {
                console.log("Employee Not Found");
            }
            break;

        // Salary with Bonus
        case 4:
            let bonusId = Number(prompt("Enter Employee ID:"));
            let bonusFound = false;

            for (let e of c) {
                if (e.id === bonusId) {
                    let bonus = e.salary * 0.10;
                    let totalSalary = e.salary + bonus;

                    console.log(`Employee: ${e.name}`);
                    console.log(`Salary: ${e.salary}`);
                    console.log(`Bonus: ${bonus}`);
                    console.log(`Total Salary: ${totalSalary}`);

                    bonusFound = true;
                }
            }

            if (!bonusFound) {
                console.log("Employee Not Found");
            }
            break;

        // Experience Level
        case 5:
            let expId = Number(prompt("Enter Employee ID:"));
            let expFound = false;

            for (let e of c) {
                if (e.id === expId) {

                    if (e.experience >= 5) {
                        console.log(`${e.name} - Senior Employee`);
                    } else {
                        console.log(`${e.name} - Junior Employee`);
                    }

                    expFound = true;
                }
            }

            if (!expFound) {
                console.log("Employee Not Found");
            }
            break;

        // Delete Employee
        case 6:
            let deleteId = Number(prompt("Enter Employee ID to Delete:"));
            let index = -1;

            for (let i = 0; i < c.length; i++) {
                if (c[i].id === deleteId) {
                    index = i;
                    break;
                }
            }

            if (index !== -1) {
                c.splice(index, 1);
                console.log("Employee Deleted Successfully");
            } else {
                console.log("Employee Not Found");
            }
            break;

        // Exit
        case 7:
            alert("Thank You!");
            break;

        default:
            console.log("Invalid Choice");

    }

} while (choice !== 7);