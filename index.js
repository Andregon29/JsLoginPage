const getLoginDiv = document.getElementById('login-div')
const getRegDiv = document.getElementById('register-div')
const welcomeHeader = document.getElementById('welcome-h')



welcomeHeader.innerHTML = "Welcome To The Register Page"


function toLogin(){

    getRegDiv.style.left = "350px"
    getLoginDiv.style.left = "0px"
    welcomeHeader.innerHTML = "Welcome To The Log-In Page"


}


function toRegister(){

    getRegDiv.style.left = "0px"
    getLoginDiv.style.left = "350px"
    welcomeHeader.innerHTML = "Welcome To The Register Page"




}