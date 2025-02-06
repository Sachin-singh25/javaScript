const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = 'Bengaluru' //Single aur double coat se farak nhi padta .. tested 

console.log(accountId);

/*
 Alet : A1 Prefer not to use var
because of issue in block scope and functional scope

A2 Semi Colan se Fark nhi Padta 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])