function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName // This is reference of function

// sayMyName(); // This is function execution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

const result = addTwoNumbers(1,2)
// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} has logged in`
// }
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} has logged in`
// }
function loginUserMessage(username = "sam"){ // setting up a default value
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} has logged in`
}

console.log(loginUserMessage());
// console.log(loginUserMessage("Sahil"));


// function calculateCartPrice(...nums1){ // ... here acts as a rest operator
//     return nums1;
// }
function calculateCartPrice(val1, val2, ...nums1){
    return nums1;
}

console.log(calculateCartPrice(100,200,300,9000)); 

const obj = {
    name: "Sahil",
    price: 210
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.name} and price is ${anyobj.price}`);
}

// handleObj(obj)
handleObj({
    name: "Sanju",
    price: 100
})

const myNewArray = [100,200,400]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,900,1000]));