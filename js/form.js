function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}