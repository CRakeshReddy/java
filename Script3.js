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