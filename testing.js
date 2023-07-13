let button = document.querySelector('.subscribe')
button.addEventListener("click",()=>{


   button.classList.toggle('darken')
   if (button.innerHTML ==="Follow"){
    button.innerHTML ="Following"
   }
   else{
    button.innerHTML ="Follow"
   }
  
  
})

