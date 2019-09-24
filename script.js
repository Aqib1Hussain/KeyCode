const display=document.querySelector(".display");

document.addEventListener("keyup",function(e){
    
   var container= document.createElement("h1");
   
   container.innerText=(`${e.key.toUpperCase()} = ${e.keyCode}`);
   display.innerText="";
   display.appendChild(container)
})

