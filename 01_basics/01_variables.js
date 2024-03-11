const accountId = 144553;
let accountEmail = "sahiljain1810@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2334 not allowed
accountEmail = "xyz@gmail.com"
accountPassword = "9910"
accountCity = "Delhi"

/*
    Prefer not to use var because of issue in 
    block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])