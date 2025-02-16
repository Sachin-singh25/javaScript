/* Isme Hum Number  krenge 

const Score = 1000
console.log(Score);

const New_Score = new Number (200)          //Explicitly Conversion in the number 
console.log(New_Score);   
console.log(New_Score.toString());

console.log(Score.toFixed(2));  //Decimal ke baad kitne plca tak 
num = 239.9832
console.log(num.toPrecision(3)); //round off ka tarika hai , isme decimal k pahle wale ko prefrence milti hai then vo expolential mai convert ho jata hai 
const num_extra = 120999934
console.log(num_extra.toLocaleString('en-IN'));  // by default american standard mai aata hai , en-IN se explicitly hum isko  indian standard mai covert krte hai 

*/

//+++++++++++++++++++++++  MAths +++++++++++++++++++++

console.log(Math.random());
console.log(Math.ceil(Math.random()))