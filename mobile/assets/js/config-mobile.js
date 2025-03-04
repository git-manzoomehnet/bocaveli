let header = document.querySelector('header')
let menuC = document.querySelector('.Menu-Container')
let menuToggle = document.querySelector('.toggleItems')
menuToggle.addEventListener('click',()=>{
    console.log('click menu');
    
    menuC.classList.toggle('Open')
    header.classList.toggle('Open')
    
})

const host = {
  debug: !1,
  settings: {
    'connection.web.callcommand': '/',
      "connection.web.trust_login": "https://basispanel.ir/apicms",
      "connection.web.basiscore": "https://basispanel.ir/apicms",
      "connection.web.media": "https://basispanel.ir/apicms",
      "default.dbsource.verb": "post",
      "default.call.verb": "get",
      "default.viewCommand.groupColumn": "prpid",
      "default.dmnid": "4914",
      "default.binding.regex": "\\{##([^#]*)##\\}",
  },
 };
let loaderContainer = document.querySelector('.loading')
let loaderContainer2 = document.querySelector('.loaderContainer')
 function fn(args){
    console.log('fn');
   loaderContainer2.style.display="flex"
   loaderContainer.style.display="flex"
   console.log('proc',args.result);
   let prevRes =[...document.querySelectorAll('.ResultC .Results')] 
   prevRes.map(e=> e.remove())
 }
 function render(args){
    console.log('render');
   loaderContainer.style.display="none"
   loaderContainer2.style.display="none"
 }
// SEARCH
let searchIcon = document.querySelector('.SearchIconHeader')
let searchBTN = document.querySelector('header .SearchIcon')
let closeSearch = document.querySelector('.CloseSerch')
let search = document.querySelector('.searchContainer-mobile')
let header2 = document.querySelector('header')
let inputt = document.querySelector('.searchContainer-mobile .inputBox input#search')
searchBTN.addEventListener('click',()=>{
  search.classList.add('OpenSearch')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('OpenSearch')
  setTimeout(() => {
    document.querySelector('.searchContainer-mobile .inputBox input#search').value = ''
    document.querySelector('.inputBox').classList.remove('goTop')
    if(document.querySelectorAll('.ResultC .Results')){
      document.querySelectorAll('.ResultC .Results').forEach(p=>{
        p.remove()
      })
    }
    if(document.querySelector('.Noresult ')){
      document.querySelector('.Noresult ').remove()
    }
  }, 500);
})

searchIcon.addEventListener('click',()=>{
  let input = document.querySelector('.searchContainer-mobile .inputBox input#search')
      if(input.value == ''){
          return
      }
     else{
        console.log('value',input.value);
        $bc.setSource('db.query',`${input.value}`)
         $bc.setSource('btn.load',true)
    }


})
inputt.addEventListener("keypress", function(event) {
  let input = document.querySelector('.searchContainer-mobile .inputBox input#search')
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    if(input.value != ''){
      event.preventDefault();
      console.log('value',input.value);
      $bc.setSource('db.query',`${input.value}`)
       $bc.setSource('btn.load',true)
    }


  }
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("p").forEach(p => {
      if (p.innerHTML.trim() === "") {
          p.remove();
      }
  });
});

const lenis =  new Lenis({
  smoothWheel: true,
  wheelMultiplier:2
});


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
