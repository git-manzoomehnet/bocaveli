$('.NewsShow-Sec').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    setTimeout(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".NewsShow-Sec");
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
    document.querySelector('.IMG-first')?.classList.add('appear')

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
    let openMenu = true;
    let isScrolling = false; // برای تشخیص اولین اسکرول
    let header = document.querySelector('header');
    let menuC = document.querySelector('.Menu-Container');
    let menuToggle = document.querySelector('.toggleItems');
    if (openMenu) {
      console.log('openMenu');
      openMenu = false; 
    }
    menuToggle.addEventListener('click', () => {
      if (!isScrolling) { 
        toggleMenu();
      }
      else{
        toggleMenuONscroll()
      }
    });
    
    scroller.on('scroll', (e) => {
      let scrollTop =e.scroll.y 
      if (scrollTop == 0) {
        isScrolling = false;
        console.log("بازگشت به بالای صفحه");
      } else {
        if (!isScrolling) {
          isScrolling = true;
          console.log("اولین اسکرول انجام شد، دیگر اجرا نمی‌شود.");
        }
      }
    });
    function toggleMenu() {
          menuC.classList.toggle('Open');
          header.classList.toggle('Open');
          if (header.classList.contains('Open')) {
            document.querySelector('.Section-1').classList.add('goRight');
            document.querySelector('.Section-2').classList.add('goRight');
            if (document.querySelector('.Project-c') || document.querySelector('.NewsShow-c')) {
              document.querySelector('.Section-3').classList.add('goRight');
            }
          } else {
            document.querySelector('.Section-1').classList.remove('goRight');
            document.querySelector('.Section-2').classList.remove('goRight');
            if (document.querySelector('.Project-c') || document.querySelector('.NewsShow-c')) {
              document.querySelector('.Section-3').classList.remove('goRight');
            }
          }
    }
    function toggleMenuONscroll() {
          menuC.classList.toggle('Open');
          header.classList.toggle('Open');
    
    }
    
    },1000)
  })})
