# project3 

```javascript

document.getElementById('clock')
// clock id hai isko # se donate kiya jata hai phir chahe usko Css mai styling krni ho ya phir js mai uski functionaliy 
clock.style.textsize=
setInterval(function(){
  let date = new Date()
//console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
}, 1000)

// 1000 refer krtaa hai 1sec ko aur 2000 2sec ko ..

```