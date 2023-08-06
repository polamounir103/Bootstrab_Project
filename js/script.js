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
// |||||||||||||||||||||||||||||||||||||||||||||||||

function itemInfo(cardItemId , closingId){
    var cardItem = document.getElementById(cardItemId)
    // var backface = document.getElementById(backId)
    var closBtn =document.getElementById(closingId)
    cardItem.style.transform = "rotateY(180deg)"
    // backface.style.transform = "rotateY(180deg)"
    closBtn.style.display = "block "
}

function closeInfoCard(cardItemId , closingId){
    var cardItem = document.getElementById(cardItemId)
    // var backface = document.getElementById(backId)
    var closBtn =document.getElementById(closingId)
    cardItem.style.transform = "rotateY(0deg)"
    // backface.style.transform = "rotateY(180deg)"
    closBtn.style.display = "none "
}

// ||||||||||||||||||||||||||||||||||||||||||||||
function changCol(boxId , playBtnId , stopBtnId ) {
    var box = document.getElementById(boxId);
    var playBtn =document.getElementById(playBtnId)
    var stopBtnBtn =document.getElementById(stopBtnId)
    box.play();

    console.log("Done")
    stopBtnBtn.style.display = "block"
    playBtn.style.display = "none"

    
}
function stopCol(boxId , playBtnId , stopBtnId) {
    var box = document.getElementById(boxId);
    var playBtn =document.getElementById(playBtnId)
    var stopBtnBtn =document.getElementById(stopBtnId)
    box.pause();

    console.log("Done")
    stopBtnBtn.style.display = "none"
    playBtn.style.display = "block"

}