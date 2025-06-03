
// premitve ( stack memory ) => copy alocate hota hai  , non permitive ( heap ) => refrence alocate hota hai , 
// refrence ke case mai sidha change memory mai hota hai yani mi original value mai ...
let userName = " Sachin Singh "

let userName2 = userName 
userName2="Sarthak Singh"
console.log(userName2);
console.log(userName);

let userid1 = {
    name :" Sachin singh",
    userid : "9821",
    upi : "Sachin@ybl"


}
                //object ke andar access ka tarika dot se hi hota hai 
// stack mai hume bas copy hi allocate hoti hai 
let userid2=userid1
userid2.name="sathak"

console.log(userid1.name);
console.log(userid2.name);


