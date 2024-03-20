const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("Temperature is less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute") // will execute no matter above code, as it is outside the block scope

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 500

// if(balance>100) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}