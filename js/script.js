 function coping(){
        alert("Text Copied")
    }


var menuBtn = document.getElementById("menu-btn")
var menuBtnClose = document.getElementById("menu-btn-close")
var sideMenu = document.querySelector("#side-menu")

function showMenu(){
    menuBtnClose.style.display="block"
    menuBtn.style.display="none"
    sideMenu.style.display="block"
    console.log("show")
}
function hideMenu(){
    menuBtnClose.style.display="none"
    menuBtn.style.display= "block"
    sideMenu.style.display="none "
    console.log("hide")
}

menuBtn.onclick=showMenu
menuBtnClose.onclick = hideMenu