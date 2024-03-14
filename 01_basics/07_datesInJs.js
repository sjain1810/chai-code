// Dates

let myDate = new Date()
// console.log(myDate); // 2024-03-14T13:01:14.749Z

// console.log(myDate.toDateString()); // Thu Mar 14 2024
// console.log(myDate.toISOString()); // 2024-03-14T13:01:14.749Z
// console.log(myDate.toJSON()); // 2024-03-14T13:01:14.749Z
// console.log(myDate.toLocaleDateString()); // 3/14/2024
// console.log(myDate.toLocaleString()); // 3/14/2024, 1:01:14 PM
// console.log(myDate.toLocaleTimeString()); // 1:01:14 PM
// console.log(myDate.toString()); // Thu Mar 14 2024 13:01:14 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2023, 0, 12)
// let myCreatedDate = new Date(2023, 0, 12, 5, 8)
// let myCreatedDate = new Date("2023-01-03")
let myCreatedDate = new Date("01-12-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp); // returns time in milliseconds
// console.log(myCreatedDate.getTime()); // returns time in milliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()); // March rep as 2 as indexing starts from 0 to avoid this we can do is newDate.getMonth() + 1

// `${newDate.getDay()} and time is`

newDate.toLocaleString('default', {
    weekday: "long"
})