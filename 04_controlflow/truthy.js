const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Invalid user mail");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Empty object");
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10; // first value is printed as there is no null or undefined values;
// val1 = null ?? 9; // 9
// val1 = undefined ?? 15 // 15
// val1 = undefined ?? 10 ?? 20 // 10
// val1 = null ?? 9 ?? null // 9
console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 110 ? console.log("Price less") : console.log("Price is greater");