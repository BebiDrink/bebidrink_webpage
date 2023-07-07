 // login
 let nameIn = document.querySelector(".alert-name");

 function validateForm() {
   
 let nombre = document.getElementById("nombre").value;
 let pass = document.getElementById("pass").value;

 // Validar los campos (puedes agregar tus propias validaciones aquí)

 // Comprobar si el campo de nombre está vacío

 if (nombre === '') {
   validAlert = 'Por favor, ingresa el nombre de usuario';
   notValid(validAlert);
   return false; // Detener el envío del formulario
 }

 if (pass === '') {
   validAlert = 'Por favor, ingresa la contraseña';
   notValid(validAlert);
   return false; // Detener el envío del formulario
 }

 if (nombre != '' && pass !='' ){

    fetch('http://127.0.0.1:5000/login/', {
  method: 'POST',
  mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   body: JSON.stringify({
     // your expected POST request payload goes here
      usuario: nombre,
      password: pass
      })
})
  .then(res => res.json())
  .then(data => {
    if (data.length === 0)
    {console.log ('no hay dtos')
    nameIn.innerHTML = "";
    const h5Container = document.createElement("h5");
    h5Container.textContent = "Usuario o Contraseña Incorrectos";
    nameIn.append(h5Container);
     document.getElementById("nombre").value="";
     document.getElementById("pass").value="";
    
}
   // enter you logic when the fetch is successful
   data.forEach(element => { 
    window.location.href = "../pages/abmProductos.html";
   });
 
  })
  .catch(error => {
  // enter your logic for when there is an error (ex. error toast)
   console.log(error)
  })  
}

}

function notValid(message){

    nameIn.innerHTML = "";
    const h5Container = document.createElement("h5");
    h5Container.textContent = message;
    nameIn.append(h5Container)
    
}
