var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPass = document.getElementById('userPass');
var btnLogIn = document.getElementById('btnLogIn');
var btnSignUp = document.getElementById('btnSignUp');
var aar = document.getElementById('aar');
var incorrect = document.getElementById('incorrect');
var doneSignUp = document.getElementById('doneSignUp');
var us = document.getElementById('us')
var info = [];


if (localStorage.getItem('userInfo')) {
    info = JSON.parse(localStorage.getItem('userInfo'))
}

function addUser() {
    if (signInValidate(userName) & signInValidate(userEmail) & signInValidate(userPass)) {
        doneSignUp.classList.remove('d-none')
        var userData = {
            uName: userName.value,
            uEmail: userEmail.value,
            uPass: userPass.value
        }
        info.push(userData);
        localStorage.setItem('userInfo', JSON.stringify(info))
        console.log(info);
    }
}
function signInValidate(element) {
    var inputsRegex = {
        userName: /^[A-Z][a-z]{2,9}$/,
        userEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        userPass: /^[A-Z][A-Za-z0-9!@#$%%^]{4,10}$/
    }
    if (inputsRegex[element.id].test(element.value)) {
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
        element.nextElementSibling.classList.add('d-none')
        return true
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        element.nextElementSibling.classList.remove('d-none')
        return false
    }
}

function signIn() {
    for (var index = 0; index <= info.length; index++) {
        if (signinEmail.value == info[index].uEmail && signinPass.value == info[index].uPass) {
            localStorage.setItem('username', info[index].uName)
            window.location.replace("/home.html");
        }
        
        else if (signinEmail.value == "" || signinPass.value == "") {
            aar.classList.remove('d-none')
        }
        else if (signinEmail.value != info[index].uEmail && signinPass.value != info[index].uPass) {
            aar.classList.add('d-none')
            incorrect.classList.remove('d-none')
        }
    }
}
function logout() {
    localStorage.removeItem('sessionuserName')
}

