let b = 90
var a = 100

if(true){
    var a = 10
    let b = 20
    const c = 30
}

var a = 100

// console.log(a);

function one(){
    const username = "Sahil"
    function two(){
        const website = "sj.com"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "Sahil"
    if(username === "Sahil"){
        const website = "sj.com"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ***************Interesting*****************


one(5)
function one(num){
    return num + 1
}



two() // We get error in this case, therefore we can see that executing expression, i.e.,
     //  constant holding  function before initialization throws error
const two = function(num){
    return num + 1
}