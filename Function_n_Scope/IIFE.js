// Immediately Invoke Fucntions Expressions (IIFE)
// iife ka use hota hai global variable ke pollution ko hatane ke liye 

(function chai(){
    console.log(`DB CONNECTED`);
    // named iife
})() ;


// jab bhi do iiife likhoge tb ye dhyan rakhna semi colan ka 

( (name ) => {
    console.log(`DB connected again ${name}`);
    // unnamed iffe

}) ("Sachin") // pehla prenthesis hota hai defination aur dushra wala hota hai exucation call 