// singleton

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Sahil",
    "full name": "Sahil Jain",
    mySym: "mykey1",
    age: 21,
    location: "Delhi",
    email: "sahil.jain1810@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser.full Name);
// // console.log(JsUser."full Name");
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "sahil@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "sahil@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());