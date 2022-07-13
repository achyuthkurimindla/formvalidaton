$(function () {
    $("#usernameErrorMessage").hide();
    $("#emailErrorMessage").hide();
    $("#passwordErrorMessage").hide();
    $("#passwordCheckErrorMessage").hide();


    let errorName = true;
    let errorEmail = true;
    let errorPassword = true;
    let errorPasswordCheck = true;

    $("#username").keyup(function () {
        checkUsername();
    })

    // $("#email").focusout(function(){
    //     checkEmail();
    // })
    $("#email").keyup(function () {
        checkEmail();
    })

    $("#password").keyup(function () {
        checkPassword();
    })

    $("#passwordCheck").keyup(function () {
        checkPasswordAgain();
    })



    function checkUsername() {
        let usernamePattern = /^[a-zA-Z]*$/;
        let usernameInput = $("#username").val();
        if (usernamePattern.test(usernameInput) && usernameInput !== "") {
            $("#usernameErrorMessage").hide();
            $("#username").css("border", "2px solid #34F458");
        } else {
            $("#usernameErrorMessage").html("Should contain only characters*");
            $("#usernameErrorMessage").css("color", "red");
            $("#usernameErrorMessage").show();
            $("#username").css("border", "2px solid #F90A0A");
            errorName = false;
        }
    }

    function checkEmail() {
        let emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let emailInput = $("#email").val();
        if (emailPattern.test(emailInput) && emailInput !== "") {
            $("#emailErrorMessage").hide();
            $("#email").css("border", "2px solid #34F458");
        } else {
            $("#emailErrorMessage").html("Invalid Email");
            $("#emailErrorMessage").css("color", "red");
            $("#emailErrorMessage").show();
            $("#email").css("border", "2px solid #F90A0A");
            errorEmail = false;
        }
    }

    function checkPassword() {
        let passwordLength = $("#password").val().length;
        let passwordValue = $("#password").val();
        if (passwordLength < 8 || passwordValue === "") {
            $("#passwordErrorMessage").html("Atleast 8 characters required*");
            $("#passwordErrorMessage").css("color", "red");
            $("#passwordErrorMessage").show();
            $("#password").css("border", "2px solid #F90A0A");

            errorPassword = false;
        } else {
            $("#passwordErrorMessage").hide();
            $("#password").css("border", "2px solid #34F458")
        }
    }
    function checkPasswordAgain() {
        let password = $("#password").val();
        let retypePassword = $("#passwordCheck").val();
        if (password !== retypePassword || retypePassword === "") {
            $("#passwordCheckErrorMessage").html("Password did not matched");
            $("#passwordCheckErrorMessage").css("color", "red");
            $("#passwordCheckErrorMessage").show();
            $("#passwordCheck").css("border", "2px solid #F90A0A");
            errorPasswordCheck = false;
        } else {
            $("#passwordCheckErrorMessage").hide();
            $("#passwordCheck").css("border", "2px solid #34F458");
        }
    }
    $("#registrationForm").submit(function () {
        errorName = true;
        errorEmail = true;
        errorPassword = true;
        errorPasswordCheck = true;

        checkUsername();
        checkEmail();
        checkPassword();
        checkPasswordAgain();

        if (errorName === true && errorEmail === true && errorPassword === true && errorPasswordCheck === true) {
            alert("Registration successfull");
        } else {
            alert("Please fill the form correctly");
            return false;
        }
    });
});