const userEmail = "sachin_singh@open.ai"

if (userEmail) {
    console.log(`Got user Email`);
    }

else{
    console.log(`Dont have user Email`);
    
}

// empty [ ] ko true by default maan liya jata hai >> "0","false",{},[],function(){}
// empty "" ko false by default maan liya jata hai 

// falsy value >>  False , 0 , -0 , BigInt 0n , null ," ", undefined , NaN 

// isko choor ke saab truthy 

const emptyobj = {}
if (Object.keys(emptyobj).length===0){
    console.log("Object is Empty");
    
}

// nullish coalesing Operator (??) : null undefined 

let val1 ;

val1 = 5 ?? 10 
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10??15 ?? undefined
console.log(val1);

// Terniary Operator 

// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80 "): console.log("more  than 80 ");
