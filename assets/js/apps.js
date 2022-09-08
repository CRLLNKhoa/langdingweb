 var $ = document.querySelector.bind(document);
 var $$ = document.querySelectorAll.bind(document);
// Code Login
var codeLogin1 =  Math.floor(Math.random() * 10000) + 1000;

document.querySelector('.code-show span:nth-child(1)').innerHTML = codeLogin1;


function inputcode(){
    var inputCode = document.querySelector('.code-input').value;
    var inputCodeBox = document.querySelector('input.code-input')
    var code = parseInt(inputCode)
    var btnLogin = document.querySelector('.btnLogin');
    console.log(code)
    console.log(codeLogin1)
    if(code == codeLogin1){
        btnLogin.classList.add('block')
    }else {
        btnLogin.classList.remove('block')
        alert('Code sai!')
    }
}


function checkRules(){
    var btnRegister = document.querySelector('.btn-register');
    var check = document.querySelector('#check');
    if(check.checked == true){
        btnRegister.style.display = 'block'
    }
    else if(check.checked == false){
        btnRegister.style.display = 'none'
    }
}

// Form Vildation

function validateFormR() {
    var erroNameR = document.querySelector('.erro-name-register');
    var erroEmailR = document.querySelector('.erro-email-register');

    let nameR = document.forms["formRegister"]["name-register"].value;
    if (nameR == "") {
        erroNameR.innerHTML = 'Tên không được bỏ trống!'
        erroNameR.style.display = 'flex'
        return false;
    }
    else{
        let regexName = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]*)*$/;
        //wrong tên
        if(!regexName.test(nameR)){
            erroNameR.innerHTML = 'Tên sai!';
            erroNameR.style.display = 'flex'
            return false;
        }else if(regexName.test(nameR)){
            erroNameR.style.display = 'none';
            }
    }

    let emailR = document.forms["formRegister"]["email-register"].value;
    if(emailR.length === 0 ){
        erroEmailR.innerHTML = 'Email không được bỏ trống!'
        erroEmailR.style.display = 'flex'
        return false;
    }
    else{
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //wrong Email
        if(!regexEmail.test(emailR)){
            erroEmailR.innerHTML = 'Email sai cú pháp!';
            erroEmailR.style.display = 'flex'
            return false;
        }else if(regexEmail.test(emailR)){
            erroEmailR.style.display = 'none';
            }
    }
    return false;
  }

function validateFormL() {
    var erroEmailL = document.querySelector('.erro-email-login');

    
    let emailL = document.forms["formLogin"]["email-login"].value;
    if(emailL.length === 0 ){
        erroEmailL.innerHTML = 'Email không được bỏ trống!'
        erroEmailL.style.display = 'flex'
        return false;
    }
    else{
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //wrong Email
        if(!regexEmail.test(emailL)){
            erroEmailL.innerHTML = 'Email sai cú pháp!';
            erroEmailL.style.display = 'flex'
            return false;
        }else if(regexEmail.test(emailL)){
            erroEmailL.style.display = 'none';
            }
    }
    return false;
  }

// Open Register & Login

var openAccount = document.querySelector('.overlay-account');
var btnLoginRL = document.querySelector('.btn-login');
var btnCloseRL = document.querySelector('.account-close');

function openRL(){
    openAccount.style.display = 'flex';
    openAccount.style.opacity = 1;
    openAccount.style.left = "0px";
}

function closeRL(){
    openAccount.style.display = 'none';
    openAccount.style.opacity = 0;
    openAccount.style.left = "100%";
}

var btnRegisterM = document.querySelector('.registerM');
var registerBoxM = document.querySelector('.account-register');
var loginBoxM = document.querySelector('.account-login');

function registerMShow(){
    registerBoxM.style.display = 'block';
    loginBoxM.style.display = 'none';
}

function loginMShow(){
    registerBoxM.style.display = 'none';
    loginBoxM.style.display = 'block';
}

var btnOpenFormLogin = document.querySelector('.select-login');
var btnOpenFormRegister = document.querySelector('.select-register');

function openLogin(){
    btnOpenFormLogin.style.left = '100%';
    btnOpenFormLogin.style.opacity = 0;
    btnOpenFormRegister.style.left = 0;
    btnOpenFormRegister.style.opacity = 1;
}

function openRegister(){
    btnOpenFormRegister.style.left = '100%';
    btnOpenFormLogin.style.left = 0;
    btnOpenFormRegister.style.opacity = 0;
    btnOpenFormLogin.style.opacity = 1;
}

// Show Summary

var showSummary = document.querySelector('.show-summary');
var closeShowSummary = document.querySelector('.show-summary__heading-close');
var darkShowSummary = document.querySelector('.show-summary__heading-dark');

function openShowSummary(){
    showSummary.style.display = 'flex';
}

function closeSummary(){
    showSummary.style.display = 'none';
}

function dark(){
    showSummary.classList.toggle('dark')
}


