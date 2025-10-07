const accountId = 128975
let accountEmail = "abc@gmail.com"
var accountCity = "Kanpur"
accountPassword = "password" // worst way of create a variable 
let accountState;

// accountId = 346324  -> this error will arise if you assign further any value for const variable's :-:TypeError: Assignment to constant variable.

accountEmail = "def@gmail.com"
accountCity = "Noida"
accountPassword = "password changed"

// prefer not to use var key word because of issue in block space and functional scope

console.table([accountId, accountEmail, accountCity, accountId, accountState])