const Heroins = ["Alexy star ","Mia Markova","Suman Aunty ","Kylie Jenner "]
const mores = ["Sunny ","mia khalifa ","Anjalina White ","jacqline"]

//Heroins.push(mores)   isme aakhri mai ek puri array ko jod diya jata hai as a elemnt is the old one whole consider as a one single entity ..
console.log(Heroins);

console.log(Heroins.length);

//const All = Heroins.concat(mores)  // isme kya hai array ke andar array daal diya jata hai aur isme ye ek naya array return karta hai isko print krwana padta hai ..
//console.log(All);

/* ek naya tarika 

const all = [...Heroins,...mores]                    > from command se hum array explicity bna sakte hai 
console.log(all);
*/

console.log(Array.from("Sachin Singh"));
score1 = 100;
score2 = 200;
score3 = 345;
console.log(Array.of(score1,score2,score3));

