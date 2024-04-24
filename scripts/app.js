let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector( ".header__icon i")

menuBtn.addEventlistener ("click",function(){
    if (menuBtnIcon.classlist.contain("fa-bars")){
        menu.style.left = "0"
menuBtnIcon.classlist = "fa fa-times"}
    else{
        menu.style.left = "-176px"
        menuBtnIcon.classlist = "fa fa-bars"
    }
})
