let nameIn = document.querySelector(".alert-name");

function validateForm() {
    // Obtener los valores de los campos
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let validAlert = "";

  

    if (name === '') {
      validAlert = 'Por favor, ingresa tu nombre';
      notValid(validAlert);
      return false; // Detener el envío del formulario
    }
  
    // Comprobar si el campo de correo electrónico está vacío o no es válido
    if (email === '') {
      validAlert = 'Por favor, ingresa tu correo electrónico';
      notValid(validAlert);
      return false; // Detener el envío del formulario

    } else if (!validateEmail(email)) {
      validAlert = 'Por favor, ingresa tu correo electrónico';
      notValid(validAlert);
      return false; // Detener el envío del formulario
    }
  
    // Comprobar si el campo de mensaje está vacío
    if (message === '') {
      validAlert = 'Por favor, ingresa tu mensaje';
      notValid(validAlert);
      return false; // Detener el envío del formulario
    }
  
    // Si todos los campos son válidos, puedes enviar el formulario
  
    // Construir el enlace de correo electrónico
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject + ":"+ name) + '&body=' + encodeURIComponent(message);
  
    // Abrir el enlace de correo electrónico en una nueva pestaña o ventana
    window.open(mailtoLink);
  
    // Opcional: Restablecer el formulario después de enviarlo
    document.getElementById('contact-form').reset();
  
    return true; // Permitir el envío del formulario
  }
  
  // Función para validar un correo electrónico utilizando una expresión regular simple
  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);

  }
  


function notValid(message){
    nameIn.innerHTML = "";
    const h5Container = document.createElement("h5");
    h5Container.textContent = message;
    nameIn.append(h5Container)
}