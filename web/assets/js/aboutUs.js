$('.AboutUsHistory-Sec').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    setTimeout(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".AboutUsHistory-Sec");
      /* SMOOTH SCROLL */
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        direction: 'horizontal',
        smooth: true,
        lerp: 0.05,
      });
      scroller.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
      });
      let pinBoxes = document.querySelectorAll(".Pin-Wrapp > *");
    let pinWrap = document.querySelector(".Pin-Wrapp");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    // Pinning and horizontal scrolling
    scrollTween= gsap.to(".Pin-Wrapp", {
      scrollTrigger: {
        scroller: pageContainer, //locomotive-scroll
        scrub: true,
        trigger:"#PinSection",
        pin:true,
        start: "top top",
        end: pinWrapWidth
      },
      x: -horizontalScrollLength,
      ease: "none"
    });
    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
    ScrollTrigger.refresh();
    scroller.update()
    window.addEventListener("load", function () {
      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh();
        scroller.update()
      });
      window.addEventListener("resize", () => {
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh(); 
        scroller.update()
      });
      let textBoxs = document.querySelectorAll('.textBox')
      textBoxs.forEach((textBox)=>{
        gsap.to(textBox,{
          scrollTrigger: {
            trigger:textBox,
            containerAnimation:scrollTween,
            start: "top bottom",
          },
          onStart:()=>{
            textBox.classList.add('appear')
          },
        })
      })

    let IMGS = document.querySelectorAll('.IMG')
    let projects = document.querySelectorAll('.Item')
    projects.forEach((proj)=>{
      gsap.to(proj.querySelector('.IMG-proj'),{
        scrollTrigger: {
          trigger:proj,
          containerAnimation:scrollTween,
          start: "top bottom",
        },
        onStart:()=>{
          proj.querySelector('.IMG-proj').classList.add('appear')
        },
      })
    })
    IMGS.forEach((IMG)=>{
        gsap.to(IMG,{
          scrollTrigger: {
            trigger:IMG,
            containerAnimation:scrollTween,
            start: "top bottom",
          },
          onStart:()=>{
            IMG.classList.add('appear')
          },
        })
      })
    let texts1 =[...document.querySelectorAll('.Section-4 .text-1 p')]
    texts1 = texts1.map(t=>{
     return t.innerHTML
    })
    let texts2 =[...document.querySelectorAll('.Section-4 .text-2 p')]
    texts2 = texts2.map(t=>{
      return t.innerHTML
     })
    let parent = document.querySelector('.Section-4 .textSec')
    for(let i = 0 ; i < texts1.length ; i++){
      let newP = document.createElement('p')
      let span1 = document.createElement('span')
      let span2 = document.createElement('span')
      span2.className +='font-medium font-Montserrat500'
      console.log(texts1[i]);
      
      span1.innerHTML = texts1[i]
      span2.innerHTML = texts2[i]
      newP.appendChild(span1)
      newP.appendChild(span2)
      parent.appendChild(newP)
    }
    },1000)
  })})
