$('.Home-Sec').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    setTimeout(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".Home-Sec");
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
   
    },1000)
  })})
