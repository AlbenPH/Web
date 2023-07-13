let button = document.querySelector(".home")


button.addEventListener('click',()=>{
    document.body.classList.toggle('nightmode');
    button.classList.toggle('homeclick');

})

