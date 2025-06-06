function Firstcode(){
    console.log("Sa")
    console.log("ch")
    console.log("in")
    console.log("Si")
    console.log("ng")
    console.log("h")
}

//Firstcode()
// First_code >> ye hota hai reference ; First_code() >> ye hota hai exicution 

// aaja kuch acha karte hai 

function addnumbers(num1,num2){                                                      //jab function create kiya jata hai us time pe jo values assign kiye jaate hai use kahte hai parameter aur call k samya jo  diya jata hai use kahte hai argument 
    //console.log(num1+num2);       
    
}

addnumbers(123,321)  //>> jo number isme pass kiye gye haai uske kahte hai argumnet 
// call krte time jo value pass ki jaati hai vo hoti hai argument aur jo functionn define ke time diya jota hai usse kahte hai perimeter

function addnumbers(num1,num2){                                                      //jab function create kiya jata hai us time pe jo values assign kiye jaate hai use kahte hai parameter aur call k samya jo  diya jata hai use kahte hai argument 
    // let result = num1 + num2
    // return result   
    
    //  method 2 bhi dekhta ja
    return num1+num2
    console.log("sachin here");   // ye kabhi chalega hi nhi kyuki function ki ek property hoti hai , return ke  baad vo aage kaam nhi karta fir chahe return tum  first line mai hi kyu na kar do 
    
    
}
const result = addnumbers(3,4)
// console.log("result :" , result );


//jab function create kiya jata hai us time pe jo values assign kiye jaate hai use kahte hai parameter aur call k samya jo  diya jata hai use kahte hai argument 

function usesrloggedin(username){
    if(username=== undefined  ){
        // console.log(`sorry your name is  not filled here `);
        return
    }
    else{
        // console.log( `${username} sir you logged in the site Succesfully Enjoy the Journey `);
        
    }

}
usesrloggedin( "sonu" )


// isme humne use kiya hai Rest operator ... ko hi rest operator kahte hai isme ky hota hai descrreatre pade value ko ek bundle mai daal ke de didiya jaata hai 

function CalculateCart_Value(...Net){
    return Net
}
// console.log(CalculateCart_Value(200, 300 , 999 , 599 , 980 , 78906, 8976))

const user ={
    username:"sachin singh",
    project:1,
    skill:"kuch nahi "
    
}

function InfoObject(anyobject){
    console.log(`username is ${anyobject.username} and 
        number of project is ${anyobject.project} `);
    

}
InfoObject(user)


const cartvalue = [ 200 ,400 , 500,78,89  ,65]
function testarray(getarray){
    length = console.log(getarray.length);
    
    return getarray[3]
}

console.log(testarray(cartvalue));
