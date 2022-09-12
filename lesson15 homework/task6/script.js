window.addEventListener("load", function () {

    let button = document.getElementById("button");

    function isValid(event) {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let submitEmail = document.getElementById("submit-email");
        let submitPassword = document.getElementById("submit-password");
        let result = document.getElementById("result");


        if (email.length < 3 || email.length > 9) {
            submitEmail.innerText = "Invalid input";
        } else if (password.length < 3 || password.length > 9) {
            submitPassword.innerText = "Invalid password";
        } else {
            result.innerText = `${email}  ${password}`;
            submitEmail.innerText = "";
            submitPassword.innerText = "";
        }
        event.preventDefault()
    }
    button.addEventListener("click", isValid);

})