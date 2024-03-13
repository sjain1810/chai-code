const score = 100 // here value converted to number automatically
// console.log(score); 

const score1 = new Number(400) 
// console.log(score1); 

// console.log(score1.toString().length);
// console.log(score1.toFixed(1)); //specially used in e-commerece platforms to get values upto fixed digits after decimal

const score2 = 123.8966

// console.log(score2.toPrecision(3)); // O/P :- 124 value is precised till 3 digits from starting
// console.log(score2.toPrecision(4)); // O/P :- 123.9 upto 4 place precision

const hund = 1000000
// console.log(hund.toLocaleString('en-IN')); // through this method we convert given number into the fromat we want, in this case indian standard form of number system

// ****************************Maths**************************************

// console.log(Math);
// console.log(Math.abs(-4)); // converts negatives to positives
// console.log(Math.round(12.6)); // rounds off the value
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(1,2,3,4,5)); // 1
// console.log(Math.max(1,2,3,4,5)); // 5

// console.log(Math.random()); // everytime this method is called, it generates a random value between 0 and 1
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // will return random number between a given range, here which is 10-20