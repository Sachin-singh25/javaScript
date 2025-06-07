const user = {
    username : " Sachin",
    price : 99,
    welcome : function()
    {
       console.log(`${this.username}, welcome to website`);
       
    }
}
// user.welcome()
// user.username="Sarthak"

// console.log(this);

// browser ke upar jo global object hai vo hai window 

// function chai (){
//     let username = " Sachin "
//     // console.log(this.username);
// }


// const chai = function (){
//     let username = " Sachin"
//     console.log(this.username);
    
// }


const chai = () => {
    let username = " Hitesh "
    // console.log(this);
}

const addmore = (num1 , num2 ) => (num1+num2)
// console.log(addmore(3,4));


// or 


const addmoree= (num1 , num2 ) =>{

    return num1+num2     // agar carly brases mai likha toh return use krns padega aur curly brases  ke bina return likhne ki koi jarurat nhi 
}
console.log(addmore(3,4));

const addmores = (num1 , num2 ) => ({ username : " sACHIN"})
addmore()

chai()