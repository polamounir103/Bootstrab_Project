var userNameInput = document.querySelector(".user-name-input") 
var userNameLable = document.getElementById("user-name-label")
function inputU(){
    userNameLable.style.display = "block"
    userNameInput.setAttribute("placeholder", "");   
}
function inputUO(){
    userNameLable.style.display = "none"
    userNameInput.setAttribute("placeholder", "Enter user name");   
}



var userPasswordInput = document.querySelector(".user-password-input") 
var userPasswordLable = document.getElementById("user-password-label")
function inputP(){
    userPasswordLable.style.display = "block"
    userPasswordInput.setAttribute("placeholder", "");   
}
function inputPO(){
    userPasswordLable.style.display = "none"
    userPasswordInput.setAttribute("placeholder", "Enter Password");   
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


// ||||||||||||||||||||||||||||||||||||||||||||||
function changCol(boxId , playBtnId , stopBtnId ) {
    var box = document.getElementById(boxId);
    var playBtn =document.getElementById(playBtnId)
    var stopBtnBtn =document.getElementById(stopBtnId)
    // var vidBox = document.getElementById(vidBoxId)
    box.play();
    box.style.scale="1.5"

        // box.style.background = "#000 !important"
    // box.style.display="none"
    console.log("Done")
    stopBtnBtn.style.display = "block"
    playBtn.style.display = "none"
    // vidBox.style.width = "100%"
    // vidBox.style.height = "100%"
    // vidBox.style.clipPath = ""
    
}
function stopCol(boxId , playBtnId , stopBtnId) {
    var box = document.getElementById(boxId);
    var playBtn =document.getElementById(playBtnId)
    var stopBtnBtn =document.getElementById(stopBtnId)
    box.pause();
    box.style.scale="1"
        // box.style.background = "#000 !important"
    // box.style.display="none"
    console.log("Done")
    stopBtnBtn.style.display = "none"
    playBtn.style.display = "block"
    // vidBox.style.width = "100%"
    // vidBox.style.height = "100%"
    // vidBox.style.clipPath = "clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%)"
}