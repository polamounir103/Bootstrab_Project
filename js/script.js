var userNameInput = document.querySelector(".user-name-input") 
var userNameLable = document.getElementById("user-name-label")
function inputf(){
    userNameLable.style.display = "block"
    userNameInput.setAttribute("placeholder", "");   
}
function inputo(){
    userNameLable.style.display = "none"
    userNameInput.setAttribute("placeholder", "Enter user name");   
}
// userNameInput.focus
 
 function coping(){
        alert("Text Copied")
    }


var menuBtn = document.getElementById("menu-btn")
var menuBtnClose = document.getElementById("menu-btn-close")
var sideMenu = document.querySelector("#side-menu")

function showMenu(){
    menuBtnClose.style.display=" block"
    menuBtn.style.display="none"
    sideMenu.style.display="flex"
    sideMenu.style.scale="1"
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