document.getElementById("form-validate").addEventListener('submit', function (event){

    event.preventDefault();

    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let uNameError = document.getElementById("uName-error");
    let emailError = document.getElementById("mail-error");
    let passError = document.getElementById("password-error");
    let cPassError = document.getElementById("cPassword-error");

    let isValid = true;

    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    if(userName === ""){
        uNameError.innerText = "Name is Required";
        isValid = false;
    }
    else if(!uNamePattern.test(userName)){
        uNameError.innerText = "Enter Your full Name";
        isValid = false;
    }
    else if(uNamePattern.test(userName)){
        uNameError.innerText = "";
        isValid = true;
    }

    if(email === ""){
        emailError.innerText = "Email is Required";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        emailError.innerText = "Enter a valid Email";
        isValid = false;
    }
    else if(emailPattern.test(email)){
        emailError.innerText = "";
        isValid = true;
    }

    if(password === ""){
        passError.innerText = "Password is Required";
        isValid = false;
    }
    else if(password.length <=7){
        passError.innerText = "Password Character must be 8";
        isValid = false;
    }
    else if(password.length >8){
        passError.innerText = "";
        isValid = true;
    }

    if(confirmPassword === ""){
        cPassError.innerText = "Confirm Password is Required";
        isValid = false;
    }
    else if(confirmPassword != password){
        cPassError.innerText = "*Confirm Password does not Match";
        isValid = false;
    }
    else if(confirmPassword === password){
        cPassError.innerText = "";
        isValid = true;
    }

    if(isValid){
        alert(`Hi ${userName}, Welcome to our Website`);
    }
})