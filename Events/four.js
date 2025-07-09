const requestUrl = 'https://randomuser.me/api/'

const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
}
xhr.send()


// APi : APi kya hota hai do system ke beeech communication stablish krne ke liye use kiya jata hai 
// for example jaise koi web serveer hai usko python mai likha gya hai aur hum jisme kaam kr rahe hai usko java mai tho , agar koi data retreve krna hai toh aur use krna hai 
// hai toh uske liye APi use hai 