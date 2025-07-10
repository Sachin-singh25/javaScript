//fetch("https://xyz.com").then().catch().finally()
// ye asyn programing jaisa hi hai ..

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task 
    //DB calls , Cryptography , network 
    setTimeout(function(){
        console.log('Async task is completed ');
        resolve()
        // jabtak idhar resolve ko call nhi kiya jayega tb tk niche wala then kaam nhi karega 
    },1000)
})
// resolveka connection hai .then ke saath 

promiseOne.then(function(){
    console.log('Promise COnsumed');
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2");
        resolve()

        
    },1000)
}).then(function(){
    console.log("Async 2 resolved ")
})



const promise_three = new Promise(function( resolve , reject){
    setTimeout(function(){
        resolve(
            {username:"chai", email:"chai@gmail.com"})
    },1000)
})

promise_three.then(function(user){
    console.log(user)
    // resolve mai jo bhi paremeter pass hoga voh direct isme aa jata hai 
})


const promise_four = new Promise(function(resolve, reject  ){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({
                username:'sachin',
                password :"1234"
                
            })}
        else{
            reject("ERROR : Something is Went Wrong ")
        }
        
    },1000)
})

promise_four
.then(function(user){
    console.log(user);
    return user.username
    
})
.then((username)=> {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The Promise is Either resolve or Reject ");
    
})


// then use karte hain hum ki Resolve ko handle karne ke liye 
// catch use krte hai failure ko handle karne ke liye 
// finally use krte hai hum default kuch ho ya na ho ye toh jarur chalega hi chalega 

const promise_five = new Promise(function(resolve,rejecct){
    setTimeout(function(){
         let error = false
        if (!error){
            resolve({
                username:'javaScript',
                password :"1234"
                
            })}
        else{
            reject("ERROR : Something is Went Wrong ")
        }
    },1000)
})

// async await jo hota hai woh catch wala functiniality perform nhi krta hai
// Tarika 1
async function consumepromise_five()
    {
       const reponse = await promise_five
      // console.log(reponse);
       
    }
consumepromise_five()

// promise ek  object hai toh isko hum () yaise handel nhi karte 

// tarika 2
async function consumepromise_five()
{
   try {  const reponse = await promise_five
       console.log(reponse);
       
       
    }catch(error){
         console.log(error);
         
    }

}
consumepromise_five()

// ye woh APi request wala hai encoded data hai usko fetch kr rahe hai hum log
async function getalluser(){
    const response = await fetch('link')
    const data = await  response.json()
    //console.log(data);

}

getalluser()

async function getalluser(){
    try{
        const repose = await fetch (" link ")
        const data = repose.json()
        console.log(data);
        
    } catch(error){
        console.log("E : " ,error);
    }
}
