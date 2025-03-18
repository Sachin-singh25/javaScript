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

function addnumbers(num1,num2){                                                      //jab function create kiya jata hai us time pe jo values assign kiye jaate hai use kahte hai parameter aur call k samya jo  diya jata hai use kahte hai argument 
    let result = num1 + num2
    return result     
    
}
const result = addnumbers(3,4)
//console.log(result);


//jab function create kiya jata hai us time pe jo values assign kiye jaate hai use kahte hai parameter aur call k samya jo  diya jata hai use kahte hai argument 

function usesrloggedin(username){
    if(username=== undefined  ){
        console.log(`sorry your name is  not filled here `);
        return
    }
    else{
        console.log( `${username} sir you logged in the site Succesfully Enjoy the Journey `);
        
    }

}
usesrloggedin( )