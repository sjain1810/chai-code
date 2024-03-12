let score = undefined

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

// "33" => number
// "33abc" => NaN
// "Sahil" => NaN
// true =>1, false=>0
// null => 0, undefined => NaN

let isLoggedIn = "15"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true, 0=> false
// "" => false
// "Sahil"=> true

let somenumber = 12

let stringnumber = String(somenumber)
// console.log(stringnumber);
// console.log(typeof stringnumber);

// ********** Operations **************

let value = 3
let negValue = -3
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Sahil"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + "2" + "2");
// console.log(1 + 1 + "1" + 2 + 2 + "2" + 2);

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let x = 3;
const y = x++;

// console.log(`x:${x} y:${y}`);

let a = 3;
const b = ++a;
// console.log(a,b);

// ++ operator can only be overloaded with two data types:- number and bigInt

// ++ operator can only be applied on references

// ++x evaluates itself to a value, not a reference therefore we cannot chain multiple increment operators together.
// Therefore, ++(++x) is not allowed.

// let d = 3
// const e = d++;
// console.log(e);

// let d1 = 3n
// const e1 = d1++;
// console.log(e1);

let d = 3
const e = ++d;
console.log(e);

let d1 = 3n
const e1 = ++d1;
console.log(e1);