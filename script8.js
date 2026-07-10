// Task 1: Employee Age Calculator

let dob = new Date("2003-04-16"); 
let currentDate = new Date();

let age = currentDate.getFullYear() - dob.getFullYear();

console.log("Employee Age:", age, "Years");



// Task 2: Online Appointment Scheduler

let appointment = new Date();

appointment.setFullYear(2027);
appointment.setMonth(11);
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);

console.log(appointment);



// Task 3: Multi-Country Meeting Time

let currentDates = new Date();

console.log(
  "India:",
  currentDates.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  })
);

console.log(
  "New York:",
  currentDates.toLocaleString("en-US", {
    timeZone: "America/New_York"
  })
);

console.log(
  "Tokyo:",
  currentDates.toLocaleString("en-JP", {
    timeZone: "Asia/Tokyo"
  })
);



// Task 4: Product Warranty Expiry

let purchaseDate = new Date();

let warrantyExpiry = new Date(purchaseDate);
warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + 2);

console.log("Purchase Date :", purchaseDate.toDateString());
console.log("Warranty Expiry :", warrantyExpiry.toDateString());



// Task 5: Digital Clock

setInterval(() => {
  let currentTime = new Date();
  console.log(currentTime.toLocaleTimeString());
}, 1000);