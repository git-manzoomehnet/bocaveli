$('.container-Sec').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    setTimeout(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".container-Sec");
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
      
       gsap.to('.Section-1 .Box',{
        onStart:()=>{
          document.querySelector('.Section-1 .Box').classList.add('appear')
        },
       })

    let projects = document.querySelectorAll('.Project')
    projects.forEach((proj)=>{
      gsap.to(proj.querySelector('.IMG'),{
        scrollTrigger: {
          trigger:proj,
          containerAnimation:scrollTween,
          start: "top bottom",
        },
        onStart:()=>{
          proj.querySelector('.IMG').classList.add('appear')
        },
      })
    })
   
    // let SURVEY = document.querySelector('.SURVEY')
    // let stringTag = SURVEY.getAttribute('href')
    // let cleanString = stringTag.replace(/<\/?p>/g,'')
    // console.log(cleanString);
    // SURVEY.setAttribute('href',cleanString)
    
    },1000)
  })})
