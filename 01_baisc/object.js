// aaj padhenge bc Object   
// symbole declare karna seekha du 
// literals se object create hoga to singleton nhi banta hai , constructor se banega tohn singleton hi banega 
// jab object { } iske help se direct banta hai uskp kahte hai object literals aur jab object function k help se banta hai usko kahte h consstructor

const mysymbol = Symbol("key1");


const jsuser = {
    name : " Sachin Singh " , 
    age : 21 ,
    Email_Id : " SachinSingh@amzon.in",
    islogged : true ,
    [mysymbol]:"keY1"
}

console.log(jsuser.name);
console.log(jsuser[mysymbol]);
console.log( typeof jsuser[mysymbol]);

// aao freze krna seekhe 
jsuser.Email_Id="SachinSinghnivdia.ai"
// Object.freeze(jsuser);
jsuser.Email_Id="SachinSinghopen.ai"
console.log(jsuser);

jsuser.greeting = function(){
 console.log("hello User kya haal chal ")
 //interpolection ka bhi use sheekh lete hai idhar hi 
 console.log(`hello user ${this.name}`);
 
}

console.log(jsuser.greeting);
console.log(jsuser.greeting());






