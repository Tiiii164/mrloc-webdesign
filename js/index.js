const headerElement = document.querySelector(".header");
document.addEventListener("scroll", function (e) {
    let currentPos = document.documentElement.scrollTop;
    if (currentPos >= 120) {
        headerElement.classList.add("fixed");
    }
    else {
        headerElement.classList.remove("fixed");
    }
})
// menu slidebar 
const itemSliderBar = document.querySelectorAll(".category-left-li");
itemSliderBar.forEach((menu, index) => {
    menu.addEventListener('click', (e) => {
        menu.classList.toggle("block");
    })
})

//products
const bigimg = document.querySelector(".product-content-left-big-img img")
const smallimg = document.querySelectorAll(".product-content-left-small-img img")
smallimg.forEach(function (imgitem, X) {
    imgitem.addEventListener("click", function () {
        bigimg.src = imgitem.src
    })
})




const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")

if (baoquan) {
    baoquan.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}

if (chitiet) {
    chitiet.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}

const button = document.querySelector(".product-content-right-bottom-top")
if (button) {
    button.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}