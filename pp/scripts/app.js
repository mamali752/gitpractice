let Menu = document.querySelector(".Menu")
let MenuBtn = document.querySelector(".header__icon")
let MenuBtnIcon = document.querySelector(".header__icon i")

MenuBtn.addEventListener("click",function (){
    if (MenuBtnIcon.classList.contains("fa-bars")){
        Menu.style.left = "0"
        Menu.classList = "fa fa-times"
    } else {
        Menu.style.left = "-256px"
        MenuBtnIcon.classList = "fa fa-bars"
    }
})
if (menuBtn.classList.contains('menu')) {
    console.log('کلاس "menu" در المان menuBtn وجود دارد.');
} else {
    console.log('کلاس "menu" در المان menuBtn وجود ندارد.');
}

