const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 31424242423353n

// Reference(Non primitive)

//Array, Objects, Functions

const heros = ["sahil", "jain", "hi"]

let myObj = {
    name: "sahil",
    age: 21
}

// const myFunction = function(){
//     console.log("Hi");
// }

// console.log(typeof(scoreValue));

// ********************************

//Stack and Heap

let myName = "Sahil"
let anotherName = myName
anotherName = "SJ"

let userOne = {
    name: "sahil",
    age: 21
}

let userTwo = userOne
userTwo.name = "sj"

console.log(myName);
console.log(anotherName);
console.log(userOne.name);
console.log(userTwo.name);