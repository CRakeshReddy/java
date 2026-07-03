// 1. Employee Login (Scope)

function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = "EMP143";
        const password = "pass143";

        console.log("Inside if block:");
        console.log("Company Name:", companyName);
        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("\nOutside if block:");
    console.log("Company Name:", companyName); // Accessible

    try {
        console.log("Employee ID:", employeeId); // Error
    } catch (error) {
        console.log("Employee ID Error:", error.message);
    }

    try {
        console.log("Password:", password); // Error
    } catch (error) {
        console.log("Password Error:", error.message);
    }
}

employeeLogin();



// 2. ATM Machine (Hoisting)

// var
console.log("Using var:");
console.log(accountBalance);
var accountBalance = 5000;


// let
console.log("\nUsing let:");
try {
    console.log(savingsBalance);
} catch (error) {
    console.log(error.message);
}
let savingsBalance = 10000;


// const
console.log("\nUsing const:");
try {
    console.log(fixedDeposit);
} catch (error) {
    console.log(error.message);
}
const fixedDeposit = 20000;

// Explanation.

// Keyword            Hoisted            Initial Value               Access Before Declaration 

//  var                Yes                undefined                     Prints undefined

//  let                Yes                Not initialized               ReferenceError  

//  const              Yes                Not initialized               ReferenceError          



// 3. Food Delivery App (Named Function)

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Mutton Biryani");



// 4. WhatsApp Status (Anonymous Function)

let updateStatus = function(status) {
    console.log("Status Updated :", status);
};

updateStatus("Busy in Meeting");



// 5. Weather App (Arrow Function)

const weatherReport = (city, temperature) => {
    console.log(`${city} Temperature is ${temperature}°C`);
};

weatherReport("Chennai", 36);



// 6. Flipkart Offer (IIFE)

(function () {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();



// 7. Online Payment (Higher Order + Callback)

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);



// 8. YouTube Playlist (Generator Function)

function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

const videos = playlist();

console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);



// 9. Student Result (Return)

function calculateTotal() {
    return 60 + 50 + 70;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);



// 10. Shopping Cart (Return)

function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(1000, 2000 - 500, 500);

console.log("Total Amount :", totalAmount);



// 11. Salary Calculator (Uncurrying)

function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

let totalSalary = salary(50000, 5000, 3000);

console.log("Total Salary :", totalSalary);



// 12. Food Bill (Currying)

function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            return food + drinks + dessert;
        };
    };
}

let totalBill = foodBill(200)(100)(80);

console.log(totalBill);



// 13. E-commerce Coupon Generator (Generator Function)

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

const coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);



// 14. Bank Transaction (Higher Order + Callback)

function transactionSuccessful() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccessful);



// 15. Employee Profile (Scope)

function employeeProfile() {
    if (true) {
        var company = "Stackly";
        let designation = "Software Developer";
        const salary = 50000;
    }

    console.log("Company:", company);

    try {
        console.log("Designation:", designation);
    } catch (error) {
        console.log("Designation Error:", error.message);
    }

    try {
        console.log("Salary:", salary);
    } catch (error) {
        console.log("Salary Error:", error.message);
    }
}

employeeProfile();

// Explanation.

// Variable                 Keyword            Scope                    Accessible Outside `if` Block? 

// company                   var                Function Scope                  Yes                          

// designation               let                Block Scope                     No                           

// salary                    const              Block Scope                     No                           