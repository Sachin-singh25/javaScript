let mydate = new Date()
/*console.log(mydate.toLocaleDateString()); // ( month /date/ year) is formate mai hota hai 
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(mydate.getTimezoneOffset());
console.log(mydate.toDateString()); // time hat jayega date aur yr aur month bas ye hi  ayega 
console.log(typeof mydate);
// js mai Months 0 Se suru hote hai na ki One se */

let myCreatedDate = new Date(2025,0,25,5,9,61)
//console.log(myCreatedDate.toLocaleString());
 // Date.now se abhhi bhi current time 1970 1 jan se mili second mai gin li jayegi 


 mydate.toLocaleString('default',{
    weekday:"long"
 })