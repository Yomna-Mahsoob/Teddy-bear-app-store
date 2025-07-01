let password_login = document.querySelector("#password")
let email_login = document.querySelector("#email")
let login_btn = document.querySelector("#sign_in")

let getPassword = localStorage.getItem("password")
let getEmail = localStorage.getItem("email")

login_btn.addEventListener("click", function (refresh_window) {
    refresh_window.preventDefault()
    if (password_login.value === "" || email_login.value === "")
        alert("Please Enter Empty data")
    else if (getPassword === password_login.value && getEmail === email_login.value) { 
        setTimeout(() => { window.location = "index.html" }, 1300) }
    else {
        alert("Data not match")
    }
}
)