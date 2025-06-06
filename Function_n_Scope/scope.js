let a=300

// bahar wala anadar accessable hota hai lekin andar wala  bahar nhi hota 

if(true){
    let a = 10;
    const b = 20;
    // console.log("inner a: " , a)
    //var c = 30; isko hum use isi liye nhi krte kyuki data conflict hota hai isme tagda wala 
}

//  { } isko kahte hai scope jab ye kisi function ke saath aata hai ya if else ke saath aata hai 
// but in object ye object declaration ke kaam aata hai 


//  console.log(a)
//  console.log(b);
//  console.log(c);
 

 function Bigger(){
    username = " Sachin Singh",
    dob = "25/01/2004"


    function location(){
        State ="Delhi",
        district = " North west ",
        pin = 110084
        //  console.log(username);
         
    }
    location()
 }
 Bigger()


//  INTRESTING CHIJEN 

console.log(addone(5))
function addone (num){
    return num+1

}

// niche wale declareadtion mai upar wala tarika nhi chalega 
const addTwo = function (num){
    return num+2
    
    
}

addTwo(5)