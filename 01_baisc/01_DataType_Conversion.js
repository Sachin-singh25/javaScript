let score = true

let Score=Number(score)  // idhar humne explicitly score ko string se number mai convert kra hai 

console.log(typeof score); //method 1
console.log(typeof (Score)) //method 2
console.log(Score)   


/* N0te

N1. "33"=>33
N2. "#43wdf"=>NaN 
N3.  true => 1 
N4.  null=> 0
N5.  undefined => NaN
*/

let isLogged_IN = 23    // zero ko chhor k koi bhi aur value loge hamesha true hi ayega

let InBoolean_isLogged_IN = Boolean( isLogged_IN)
console.log(InBoolean_isLogged_IN);
