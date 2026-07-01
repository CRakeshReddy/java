// Task 1 - Company Welcome Function

function welcome() {
    console.log("Welcome to Stackly IT");
}

welcome();




// Task 2 - Employee Details

function employeeDetails(name, department, salary) {
    console.log("Employee Name :", name);
    console.log("Department :", department);
    console.log("Salary :", salary);
}

employeeDetails("Rakesh", "Developer", 35000);



// Task 3 - Calculate Bonus

function calculateBonus(salary, bonus) {
    let totalSalary = salary + bonus;
    console.log("Total Salary :", totalSalary);
}

calculateBonus(35000, 5000);



// Task 4 - Check Pass or Fail

function checkResult(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkResult(34);



// Task 5 - Return Employee Name

function getEmployeeName() {
    return "Naveen";
}
let employeeName = getEmployeeName();

console.log(employeeName);



// Task 6 - Product Price

function getProductPrice() {
    return 35000;
}
let price = getProductPrice();
let gst = price * 0.19;
let finalPrice = price + gst;

console.log("Product Price :", price);
console.log("GST :", gst);
console.log("Final Price :", finalPrice);



// Task 7 - Variable Scope
//function demo() {

  //  if (true) {

    //    var a = 10;
      //  let b = 20;
        //const c = 30;   

  //  }

    //console.log(a);
    //console.log(b);
   // console.log(f);

//}

//demo();
// Which variable prints?
// Answer: The variable 'a' will print because it is declared with 'var', which has function scope. The variables 'b' and 'c' will not print because they are declared with 'let' and 'const', which have block scope and are not accessible outside the if block.
// Which variables give an error?
// Answer: The variables 'b' and 'c' will give an error because they are declared with 'let' and 'const', which have block scope and cannot be accessed outside the if block.
// Why?
// Answer: In JavaScript, 'var' is function-scoped, meaning it can be accessed anywhere within the function it is declared in. On the other hand, 'let' and 'const' are block-scoped, meaning they can only be accessed within the block (e.g., if statement) they are declared in. Therefore, trying to access 'b' and 'c' outside of the if block results in a ReferenceError.


// Task 8 - Hoisting
console.log(a);

var a = 100;

console.log(b);

var b = 200;
// Explain the difference.
// Answer: Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution. In the case of 'var', the declaration is hoisted but not the initialization, so the variable is initialized with 'undefined'. For 'let' and 'const', the declaration is also hoisted, but the initialization is not, leading to a ReferenceError if accessed before the declaration.



// Task 9 - Named Function

function rakesh() {
    console.log("Good Morning");
}

rakesh();



// Task 10 - Anonymous Function

let function1 = function () {
    console.log("Welcome Employee");
};

function1();



// Task 11 - Arrow Function

const training = () => {
    console.log("JavaScript Training");
};

training();



// Task 12 - Return Function

function getCompanyName() {
    return "Stackly";
}
let companyName = getCompanyName();

console.log("Welcome", companyName);



// Task 13 - Higher Order Function

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);



// Task 14 - Callback Function

function delivered() {
    console.log("Order Received  ");
}

function preparingFood(callback) {
    console.log("Food is Ready");
    callback();
}

function orderReceived(callback) {
    console.log("Preparing Food");
    callback(delivered);
}

orderReceived(preparingFood); 



// Task 15 - Generator Function

function* couponGenerator() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

const coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);



// Task 16 - Return + Generator

function* vehicle() {
    yield "Bike";
    yield "Car";
    yield "Bus";
}

const vehicles = vehicle();

console.log(vehicles.next().value);
console.log(vehicles.next().value);
console.log(vehicles.next().value);



// Task 17 - Currying

function discount(price) {
    return function (discountPercent) {
        let finalPrice = price - (price * discountPercent / 100);
        console.log("Final Price :", finalPrice);
    };
}

discount(1000)(10);



// Task 18 - Company Salary (Currying)

function salary(baseSalary) {
    return function (bonus) {
        return function (allowance) {
            let totalSalary = baseSalary + bonus + allowance;
            console.log(totalSalary);
        };
    };
}

salary(40000)(4000)(3000);



// Task 19 - Real-Time Login System

function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();



// ⭐ Mini Project - Employee Salary Management System

const employee = {
    id: 143,
    name: "Rakesh",
    department: "Software Developer",
    salary: 60000
};

const welcomes = () => {
    console.log("===== Welcome to Employee Salary Management System =====");
};

welcomes();


const showDepartment = function () {
    console.log("Department :", employee.department);
};

showDepartment();

function displayEmployee() {
    console.log("\n===== Employee Details =====");
    console.log("Employee ID   :", employee.id);
    console.log("Employee Name :", employee.name);
    console.log("Department    :", employee.department);
    console.log("Basic Salary  :", employee.salary);
}

displayEmployee();

function calculateSalary(salary, bonus) {
    return salary + bonus;
}

const finalSalary = calculateSalary(employee.salary, 5000);

console.log("\nSalary After Bonus :", finalSalary);

function dashboard() {
    console.log("Employee Dashboard Loaded");
}

function login(callback) {
    console.log("\nLogin Successful");
    callback();
}

login(dashboard);

function* bonusCoupons() {
    yield "5% Bonus Coupon";
    yield "10% Bonus Coupon";
    yield "15% Bonus Coupon";
    yield "20% Bonus Coupon";
}

const coupon = bonusCoupons();

console.log("\nMonthly Bonus Coupons");
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

function taxCalculation(salary) {
    return function (taxPercent) {
        return salary - (salary * taxPercent / 100);
    };
}

const salaryAfterTax = taxCalculation(finalSalary)(10);

console.log("\n===== Final Employee Report =====");
console.log("Employee Name     :", employee.name);
console.log("Department        :", employee.department);
console.log("Basic Salary      :", employee.salary);
console.log("Bonus             :", 5000);
console.log("Salary + Bonus    :", finalSalary);
console.log("Tax Deduction     : 10%");
console.log("Final Salary      :", salaryAfterTax);
console.log("Status            : Active");