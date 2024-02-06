let burgerBTN = document.querySelector(".burger-menu-button");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBTN.onclick = function () {
    if(!isBurgerOpen){
        burgerMenu.style.display = "block";
        burgerBTN.style.backgroundPosition = "center left 35px, center";
        isBurgerOpen = true;
    }else if(isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBTN.style.backgroundPosition = "center, center left 35px";
        isBurgerOpen = false;
    }
}