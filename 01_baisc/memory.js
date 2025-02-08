
// premitve ( stack memory ) => copy alocate hota hai , non permitive ( heap ) => refrence alocate hota hai , sidha change memory mai hota hai ...
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

let userid2=userid1
userid2.name="sathak"

console.log(userid1.name);
console.log(userid2.name);


