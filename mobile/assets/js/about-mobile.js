document.addEventListener('DOMContentLoaded',()=>{
  let textBoxs =[...document.querySelectorAll('.textBox')]
  let IMGS = [...document.querySelectorAll('.IMG')]
  textBoxs[0].classList.add('appear')
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
let positionElement = fadeElement.getBoundingClientRect().top+200;
let windowHeight = window.innerHeight
if(positionElement < windowHeight){
    fadeElement.classList.add('appear')
}
}
let texts1 = [...document.querySelectorAll('.Section-4 .text-1 p')]
  .filter(t => t.textContent.trim() !== '') // حذف pهای خالی
  .map(t => t.innerHTML);

let texts2 = [...document.querySelectorAll('.Section-4 .text-2 p')]
  .filter(t => t.textContent.trim() !== '') // حذف pهای خالی
  .map(t => t.innerHTML);

console.log(texts2);

let parent = document.querySelector('.Section-4 .textSec');
for (let i = 0; i < texts1.length; i++) {
  let newP = document.createElement('p');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  span2.className += 'font-bold font-Montserrat500';
  
  span1.innerHTML = texts1[i];
  span2.innerHTML = `${texts2[i]},` || ''; // جلوگیری از undefined
  
  newP.appendChild(span1);
  newP.appendChild(span2);
  parent.appendChild(newP);
}


