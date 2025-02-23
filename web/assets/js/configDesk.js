let header = document.querySelector('header')
let menuC = document.querySelector('.Menu-Container')
let menuToggle = document.querySelector('.toggleItems')
menuToggle.addEventListener('click',()=>{
    console.log('click menu');
    
    menuC.classList.toggle('Open')
    header.classList.toggle('Open')
})


// SEARCH
let searchIcon = document.querySelector('.SearchIconHeader')
let searchBTN = document.querySelector('header .SearchIcon')
let closeSearch = document.querySelector('.CloseSerch')
let search = document.querySelector('.searchContainer')
let header2 = document.querySelector('header')
let inputt = document.querySelector('.searchContainer .inputBox input#search')
searchBTN.addEventListener('click',()=>{
  search.classList.add('OpenSearch')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('OpenSearch')
})

searchIcon.addEventListener('click',()=>{
  let input = document.querySelector('.searchContainer .inputBox input#search')
      console.log('val',input.value);
      if(input.value == ''){
          return
           }
         else{
             console.log('val',input.value);
             setTimeout(()=>{
            window.location.href = `/search.bc?q=${input.value}`
             },1000)}


})
inputt.addEventListener("keypress", function(event) {
  let input = document.querySelector('.searchContainer .inputBox input#search')
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    if(input.value != ''){
      event.preventDefault();
    console.log('clicked');
console.log('val',input );
console.log('val',input.value);
  window.location.href = `/search.bc?q=${input.value}`
setTimeout(() => {
 
}, 1000);
    }


  }
});