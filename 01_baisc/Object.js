//nested object krke dekhte hai

const tinder = {}

tinder.email="hisachin.2501"
tinder.name="Sachin Singh"
tinder.age = 19

//console.log(tinder.age);

const multiplerecord={
    user1:{
        name:{
            fname:"Sachin",
            lname:"Singh"
        },
        age : 21,
        emailid:"Sachinsingh@google.in",
        designation:"Web devloper",


    },
    user2:{
        name:{
            fname:"Archit",
            lname:"jha"
        },
        age:21,
        emailid:"Architjha@google2k27.in",
        designation:"Web Developer"
    }
}

console.log(multiplerecord.user2.fullname?.name.fname);
console.log(multiplerecord);

const object1={ 1:"a",2:"b",3:"c"}
const object2={4:"d",5:"e",6:"f"}

//const merger_object = [...object1,...object2]    >Note: Ye idhar Nhi chalta 
//const merger_object = Object.assign({},object1,object2)
const merger_object={...object1,...object2}   //spread operator 
// console.log(merger_object);

// anothe way of merging 

const obj3 = Object.assign(object1,object2)
// console.log(obj3);
console.log(Object.keys(multiplerecord));
console.log(Object.values(multiplerecord));



// hasownproperty krke bhi ek tarika hota hai 
