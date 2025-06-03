const accountId = 144553 /* ye ek baar declare ho gya toh change nhi kr sakte */
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
 Alet : { } isi koh scope kahte hai 

var mai scope ki problem thi iss liye aaya let jisme scope wali problem door ho gyi 
bas itna hi farak hai baaki dono use variable ddclare k liye hi hote hai 

A2 Semi Colan se Fark nhi Padta 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])