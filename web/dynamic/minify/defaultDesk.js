$(".Home-Sec").imagesLoaded({},(function(){$(document).ready((function(){setTimeout((()=>{gsap.registerPlugin(ScrollTrigger);const e=document.querySelector(".Home-Sec"),t=new LocomotiveScroll({el:e,direction:"horizontal",smooth:!0,lerp:.05});t.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(e,{scrollTop(e){return arguments.length?t.scrollTo(e,0,0):t.scroll.instance.scroll.y},getBoundingClientRect:()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),pinType:e.style.transform?"transform":"fixed"});document.querySelectorAll(".Pin-Wrapp > *");let o=document.querySelector(".Pin-Wrapp").offsetWidth,r=o-window.innerWidth;scrollTween=gsap.to(".Pin-Wrapp",{scrollTrigger:{scroller:e,scrub:!0,trigger:"#PinSection",pin:!0,start:"top top",end:o},x:-r,ease:"none"}),ScrollTrigger.addEventListener("refresh",(()=>t.update())),ScrollTrigger.refresh(),t.update(),window.addEventListener("load",(function(){ScrollTrigger.addEventListener("refresh",(()=>t.update())),ScrollTrigger.refresh(),t.update()})),window.addEventListener("resize",(()=>{ScrollTrigger.addEventListener("refresh",(()=>t.update())),ScrollTrigger.refresh(),t.update()})),document.querySelectorAll(".textBox").forEach((e=>{gsap.to(e,{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},onStart:()=>{e.classList.add("appear")}})})),document.querySelectorAll(".IMG").forEach((e=>{gsap.to(e,{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},onStart:()=>{e.classList.add("appear")}})}));let l=!0,c=!1,n=document.querySelector("header"),s=document.querySelector(".Menu-Container"),i=document.querySelector(".toggleItems");l&&(console.log("openMenu"),l=!1),i.addEventListener("click",(()=>{c?(s.classList.toggle("Open"),n.classList.toggle("Open")):(s.classList.toggle("Open"),n.classList.toggle("Open"),n.classList.contains("Open")?(document.querySelector(".Section-1").classList.add("goRight"),document.querySelector(".Section-2").classList.add("goRight"),(document.querySelector(".Project-c")||document.querySelector(".NewsShow-c"))&&document.querySelector(".Section-3").classList.add("goRight")):(document.querySelector(".Section-1").classList.remove("goRight"),document.querySelector(".Section-2").classList.remove("goRight"),(document.querySelector(".Project-c")||document.querySelector(".NewsShow-c"))&&document.querySelector(".Section-3").classList.remove("goRight")))})),t.on("scroll",(e=>{0==e.scroll.y?(c=!1,console.log("بازگشت به بالای صفحه")):c||(c=!0,console.log("اولین اسکرول انجام شد، دیگر اجرا نمی‌شود."))}))}),1e3)}))}));