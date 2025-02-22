let header = document.querySelector('header')
let menuC = document.querySelector('.Menu-Container')
let menuToggle = document.querySelector('.toggleItems')
menuToggle.addEventListener('click',()=>{
    console.log('click menu');
    
    menuC.classList.toggle('Open')
    header.classList.toggle('Open')
})