// // Task 1 - Employee Name
// Ask the employee for their name using prompt().
// Print the employee name in the console.
// Display "Welcome <Employee Name>" on the webpage using document.writeln().

a = prompt("Enter your name:");

console.log(a);

document.writeln("Welcome " + a);



// Task 2 - Company Entry Confirmation
// Show a confirm box:
// "Are you ready to join today's JavaScript training?"
// Print the user's answer (true/false) in the console.

b = confirm("Are you ready to join today's JavaScript training?");

console.log(b);



// Task 3 - Customer Greeting
// Show an alert saying:
// "Welcome to Stackly Solutions!"
// Then print "Customer entered the website." in the console.

alert("Welcome to Stackly Solutions!");

console.log("Customer entered the website.");



// Task 4 - Student Details
// Ask the student for:
// 1. Name
// 2. Age
// Print both values in the console.

c = prompt("Enter your name:");
d = prompt("Enter your age:");

console.log(c);
console.log(d);



// Task 6 - Login Validation
// Ask the user to enter their username.
// If the username is empty,
// show a warning using console.warn().
// Otherwise print:
// "Login Successful: <username>"

e = prompt("Enter your username:");

if (e === "") {
    console.warn("Username cannot be empty.");
} else {
    console.log("Login Successful: " + e);
}



// Task 7 - Website Maintenance
// Display an alert:
// "Website is under maintenance."
// After that print an error message in the console using console.error().

alert("Website is under maintenance.");

console.error("Website is under maintenance.");



// Task 8 - Feedback Collection
// Ask the user:
// "How was today's JavaScript session?"
// Print the feedback in the console.
// Display:
// "Thank you for your feedback!"
// on the webpage.

f = prompt("How was today's JavaScript session?");

console.log(f);

document.writeln("Thank you for your feedback!");



// Task 9 - Profile Information
// Ask the user for:
// Name
// City
// Favorite Programming Language
// Print all three values in the console.

g = prompt("Enter your name:");
h = prompt("Enter your city:");
i = prompt("Enter your favorite programming language:");

console.log(g);
console.log(h);
console.log(i);




// Task 10 - Mini Registration Form
// Ask the user for:
// Full Name
// Email
// Mobile Number
//
// Print all details in the console like:
//
// ===== Registration Details =====
// Name   :
// Email  :
// Mobile :
//
// Finally show:
// alert("Registration Successful!");

j = prompt("Enter your full name:");
k = prompt("Enter your email:");
l = prompt("Enter your mobile number:");

console.log("===== Registration Details =====");
console.log("Name   : " + j);
console.log("Email  : " + k);
console.log("Mobile : " + l);

alert("Registration Successful!");