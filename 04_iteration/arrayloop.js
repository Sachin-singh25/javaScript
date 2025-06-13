// for of loop 

const ary = [ 1,2,3,4,5]

for( const num of ary){
    //console.log(num);
    

}
const greetings=" Hello World"
for (const greet of greetings) {
    //console.log(greet);
    
}

//Maps

const map=new Map()
map.set("in", "India")
map.set("usa"," united state of america")
map.set("Pak", "Pakistan")
map.set("Uk", "United Kingdom")

// console.log(map);

for (const key in map) {
    console.log(key);
    
    
}
for (const [key , value] of map) {
    // console.log(key,value);
    
    
}

const myobject = {
    "game1" : " Free Fire",
    "game2" : " NFS",
    "game3" : " BGMI",
    "game4" : "Kabaddi"
}
for (const key in myobject) {
//    console.log(key);
   
}
// for (const [key , value] of myobject) {
//     console.log(key , ": ",value );
//     }

// ye itertable ni hai isse 