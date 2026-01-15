const jsUser = {
    name : "Madhav",
    age : 21,
    location : "Jaipur",
    email : "madhav@google.com",
    isLoggedIn : false, 
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting());