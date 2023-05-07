// Función para mostrar el modal
function mostrarModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Alerta, menor de edad
function noEsMayor() {
    document.body.className = "alerta-m-image";
    const mensaje = `
        <section class='alerta-m-container'>
            <h1 class='alerta-m-title'>
                LO SENTIMOS, 
                ESTE SITIO ES PARA 
                MAYORES DE EDAD
            <h1>
        </section>
    `;

    document.body.innerHTML = mensaje
    mostrarModal()
}

// Función para verificar la edad
function verificarEdad() {
    // Obtener la fecha de nacimiento ingresada en el formulario
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    console.log(fechaNacimiento);

    // Calcular la edad en milisegundos
    const edadEnMilisegundos = Date.now() - fechaNacimiento.getTime();
    console.log(edadEnMilisegundos);

    // Convertir la edad en milisegundos a años
    const edadEnAnos = new Date(edadEnMilisegundos).getUTCFullYear() - 1970;
    console.log(edadEnAnos)

    // Verificar si la edad es mayor o igual a 18
    if (edadEnAnos >= 18) {
        sessionStorage.setItem("mayor", "true");
        cerrarModal();
        // Permitir el acceso a la página
    } else {
        // Mostrar mensaje de alerta
        noEsMayor();
    }
}


// Verificar si el usuario ya ingresó su edad anteriormente
let mayorEdad = sessionStorage.getItem("mayor");
if (mayorEdad === null) {
    window.addEventListener("load", mostrarModal);
}

// Asignar eventos a los botones del modal
let btnIngresar = document.getElementById("ingresar");
btnIngresar.onclick = verificarEdad;

