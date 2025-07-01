let username = document.querySelector("#username")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let register_btn = document.querySelector("#sign_up")

register_btn.addEventListener("click", function (refresh_window) {
    refresh_window.preventDefault()
    if (username.value === "" || password.value === "" || email.value === "")
        alert("Please Enter Empty data")
    else {
localStorage.setItem("username", username.value)
localStorage.setItem("email", email.value)
localStorage.setItem("password", password.value)
setTimeout(() =>{
    window.location= "login.html"} , 1300)
    }
})

