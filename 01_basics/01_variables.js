const accountId = 144552
let accountEmail = "madhav@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed


accountEmail = "mk@mk.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity]);