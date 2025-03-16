// iska ek short comming hai isme same refrence adress ka  milta hai copies ko  : sallow copies 
// deep copies : Address refrence is not same 

const Myarray = [ 2,4,5.5,8,90]
console.log("A",Myarray);

/*Myarray.push(98,76);
//Myarray.pop();
console.log(Myarray);
Myarray.shift()               // aage se hatane ke kaam aata hai 
Myarray.unshift(8)            // aage se jodne ke kaam aataa hai 
console.log(Myarray.includes(90));
console.log(Myarray.indexOf(89));
*/

// slice Splice
const myar1 = Myarray.slice(1,3);
console.log("Sliced Array " ,myar1);
const myar2 = Myarray.splice(1,3);
console.log("Spliced Array " ,myar2);
console.log("ended array",Myarray);




