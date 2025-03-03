document.addEventListener('DOMContentLoaded',()=>{
  let textBoxs =[...document.querySelectorAll('.textBox')]
  let IMGS = [...document.querySelectorAll('.IMG')]
  textBoxs[0].classList.add('appear')
  textBoxs[1].classList.add('appear')
  IMGS[0].classList.add('appear')
document.addEventListener('scroll',(e)=>{
  textBoxs.map(pro=>{
        animate(pro)
        })
  IMGS.map(pro=>{
      animate(pro)
    })
})
})
const animate = (elem)=>{
let fadeElement = elem
let positionElement = fadeElement.getBoundingClientRect().top;
let windowHeight = window.innerHeight
if(positionElement < windowHeight){
    fadeElement.classList.add('appear')
}
}


