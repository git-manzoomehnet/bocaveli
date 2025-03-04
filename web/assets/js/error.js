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