const headerElement = document.querySelector(".header");
document.addEventListener("scroll", function (e) {
   let currentPos = document.documentElement.scrollTop;
   if(currentPos >= 120 ){
    headerElement.classList.add("fixed");
   }
   else{
    headerElement.classList.remove("fixed");
   }
})
    // menu slidebar 
const itemSliderBar = document.querySelector(".category-left-li");
itemSliderBar.forEach(function ())