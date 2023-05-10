/* ========================================================
Consumo de api's para recetas de cockteles y tragos, 
maquetado dinámico de elementos e inserción de los mismos
=========================================================== */

/***** SELECTORES DEL DOCUMENTO*****/
const botonBusqueda = document.querySelector("#buscar"); //boton
const inputBusqueda = document.querySelector("#consulta"); //input
const resultado = document.querySelector("#resultado"); //Contenedor para resultados
const coincidencias = document.querySelector("#coincidencias"); // contenedor para filtros por coincidencia
const simbol = `${'VucW8STKya'}/${'CqemKDvZAGw'}==${'3PxF2QwPy0Lx4Hpd'}`; // Api

/****** CARGANDO EVENTOS DEL DOCUMENTO ******/
window.addEventListener("load", agregarEventos);

/* ====================================================================== */
/*** BUSCAR Y MOSTRAR EN EL DOCUMENTO LA INFO DEL TRAGO ***/
function buscarTrago() {
    const busqueda = inputBusqueda.value;
    coincidencias.innerHTML = "";
    resultado.innerHTML = "";
    // Consumiendo API
    opcionesApi(busqueda, simbol)
        .then((resultadosTragos) => {
            mostrarOpciones(resultadosTragos, busqueda);
        })


        .catch((error) => {
            console.log("Busqueda sin resultado"); // manejar errores si es necesario
            cargando("off")
        });
}

/* ====================================================================== */
var resultadosTragos = {}
function opcionesApi(tragoBuscado, key) {
    cargando("on")
    const ninKey = key; // Api Key
    const apiTxt = `https://api.api-ninjas.com/v1/cocktail?name=${tragoBuscado}`;
    const apiImg = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${tragoBuscado}`;
    // Obteniendo imagen
    return axios
        .get(apiImg)
        .then((response) => {
            const Trago1 = response.data;
            const listaDeTragos1 = Trago1.drinks;
            // Obteniendo ingredientes e instrucciones
            return axios
                .get(apiTxt, { headers: { "X-Api-Key": ninKey } })
                .then((response) => {
                    const listaDeTragos2 = response.data;
                    interseccionResultado = interseccion(listaDeTragos1, listaDeTragos2);
                    console.log(interseccionResultado);

                    const resultadosTragos = {
                        listaTragos: interseccionResultado,
                    };

                    return resultadosTragos;
                })
                .catch((error) => {
                    console.log("ERROR: no se pudieron cargar los datos");
                    NoEncontrado(tragoBuscado)
                    cargando("off")
                });
        })
        .catch((error) => {
            console.log("ERROR: no se pudo leer la imagen");
            NoEncontrado(tragoBuscado)
        });
}


/* ====================================================================== */
function obtenerSeleccionado(tragoBuscado, key) {
    cargando("on")
    const ninKey = key; // Api Key
    const apiNinjas = `https://api.api-ninjas.com/v1/cocktail?name=${tragoBuscado.replace("pina", "piña")}`;
    const apiCocktailDB = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${tragoBuscado}`;

    // Obteniendo imagen
    return axios
        .get(apiCocktailDB)
        .then((response) => {
            const Trago = response.data;
            const imagenTrago = Trago.drinks[0].strDrinkThumb;
            console.log("URL DE IMAGEN ES", imagenTrago);

            // Obteniendo ingredientes e instrucciones
            return axios
                .get(apiNinjas, { headers: { "X-Api-Key": ninKey } })
                .then((response) => {

                    const ingredientesTrago = response.data[0].ingredients;
                    const instruccionesTrago = response.data[0].instructions;

                    const imagen = imagenTrago;
                    const nombre = tragoBuscado;
                    const ingredientes = ingredientesTrago;
                    const instrucciones = instruccionesTrago;

                    enviarResultado(nombre, imagen, ingredientes, instrucciones, resultado);
                })

                .catch((error) => {
                    console.log(error, "ERROR: no se pudieron cargar los datos");
                    NoEncontrado(tragoBuscado)
                    /* resultado.innerHTML = videoSugerencia(); */
                });
        })

        .catch((error) => {
            console.log(error, "ERROR: no se pudo leer la imagen");
            NoEncontrado(tragoBuscado)
            /* resultado.innerHTML = videoSugerencia(); */
        });
}

/* ====================================================================== */
/* Muestra opciones o coincidencias según el elemento buscado. Si el trago
existe, inserta botones dinámicos con las opciones devueltas.*/
let tragoSeleccionado = ""
function mostrarOpciones(objetoTragos, tragoBuscado) {


    cargando("on")

    if (objetoTragos.listaTragos.length != 0) {
        // crear un nuevo elemento div
        const opcionesDiv = document.createElement("div");
        opcionesDiv.classList.add("flexro", "opciones");

        // crear los botones y agregarlos al elemento div
        objetoTragos.listaTragos.forEach((trago) => {
            const boton = document.createElement("button");
            boton.classList.add("btn", "opciones");
            boton.setAttribute("data-trago", trago); // agregar atributo data
            boton.textContent = trago;
            opcionesDiv.appendChild(boton);
        });

        cargando("off");

        coincidencias.innerHTML = `
        <h3>
            Resultados para ${tragoBuscado[0].toUpperCase() + tragoBuscado.slice(1).toLowerCase()}
        </h3>
    `;

        // agregar el elemento div al contenedor
        coincidencias.appendChild(opcionesDiv);

        // agregar eventos de clic a los botones
        const botones = opcionesDiv.querySelectorAll(".opciones");
        botones.forEach((boton) => {
            boton.addEventListener("click", () => {
                tragoSeleccionado = boton.getAttribute("data-trago"); // obtener el valor del atributo data
                console.log(tragoSeleccionado);
                resultado.innerHTML ="";
                obtenerSeleccionado(tragoSeleccionado, simbol);
                return tragoSeleccionado
            });
        });
        
    }else {
        NoEncontrado(tragoBuscado)
    };
}

/* ====================================================================== */
/*  INSERTAR RECETA E IMAGEN DEL TRAGO EN EL DOCUMENTO */
function enviarResultado(nombre, imagen, ingredientes, instrucciones, destino) {
    cargando("off");
    destino.innerHTML = `
      <div class='grid center-center container card bkg-card'>

        <!-- TITULOS -->
        <h2 class="trago-titulo col">${nombre.toUpperCase()}</h2>
        <div class="col m-12 l-6">
            <img class="trago-img" src=${imagen} >
        </div>

        <!-- INGREDIENTES -->
       <div class='grid col m-12 l-6 container'>   
            <div class='ingredientes col s-12'>
                <h3>INGREDIENTS</h3>
                ${listaIngredientes(ingredientes)}
            </div>

            <!-- INSTRUCCIONES -->    
            <div class='instrucciones col s-12'>
                <h3>INSTRUCTIONS</h3>
                <p class='container'>${instrucciones}</p>
                <br>
            </div>  
        </div>

      </div> 
      <br>
      `;
}

/* ====================================================================== */
/* ORDENAR INGREDIENTES EN FORMATO LISTA UL */
function listaIngredientes(listaCruda) {
    const ingredientes = listaCruda.map(
        (ingrediente) => `<li class='ingredients-items'>${ingrediente}</li>`
    );
    const listaFormateada = `<ul class='flex flexrow-wrap'>${ingredientes.join("")}</ul>`;
    return listaFormateada;
}

/* ====================================================================== */
/*  SPINNER INDICADOR DE CARGA DE DATOS */
function cargando(status) {
    const spinnerContainer = document.getElementById("spinner"); // Spinner de espera.
    // Desactivar spinner
    if (status === "off" || status == null) {
        spinnerContainer.style.display = "none";
        /*         coincidencias.style.display = "block"; */
        resultado.style.display = "block";
    }
    // Activar spinner
    if (status == "on") {
        spinnerContainer.style.display = "block";
        /*         coincidencias.style.display = "none"; */
        resultado.style.display = "none";
    }
}

/* ====================================================================== */
/*  BUSCA LOS ELEMENTOS IGUALES EN DOS ARRAYS DE TRAGOS
EN ESTE CASO, BUSCA LOS NOMBRES. DEBIDO A QUE SE USAN
DOS API'S, SE REQUIERE HACER COINCIDIR IMAGEN Y TEXTOS. */
function interseccion(array1, array2) {
    let lista1 = [];
    let lista2 = [];

    // Guardando los nombres de tragos en arrays
    array1.forEach((item) => {
        lista1.push(item.strDrink.replace(/ñ/g, "n"));
    });
    array2.forEach((item) => {
        lista2.push(item.name.replace(/ñ/g, "n"));
    });

    //formateando los arrays a sets, con strings en lowercase.
    const set1 = new Set(lista1.map((item) => item.toLowerCase()));
    console.log("lista1", set1);
    const set2 = new Set(lista2.map((item) => item.toLowerCase()));
    console.log("lista2", set2);


    //Encuentra elementos comúnes en ambos sets
    const iguales = Array.from(
        new Set([...set1].filter((elementoComun) => set2.has(elementoComun)))
    );

    return iguales;
}
/* ====================================================================== */
function videoSugerencia() {
    /* Experimental. Devuelve un iframe de video sugerencia 
    de cocktelería si no se encuentra trago */
    return `
    <div class="flexcol center-center v100 h100">
        <h2 class="center">Qué tal una video lista con sugerencias?</h2>
        <div class="flex center iframe-container">
            <iframe id="ytplayer" type="text/html"
            src="https://www.youtube.com/embed?listType=playlist&list=PLmqzYRoT_30xx4jKVX7SRD85TOp1kHrPc"
            frameborder="0"></iframe>
        </div>
    </div>
    `;
}


function NoEncontrado(tragoBuscado){
    cargando("off")
    coincidencias.innerHTML = "";
    resultado.innerHTML = `
        <div class=''>
            <h2>Lo sentimos, ${tragoBuscado} no fue encontrado en la API </h2>
            <img class="no-encontrado" src="../images/copaVacia.jpg">
        </div>
    `;

    
}









/* ====================================================================== */
function agregarEventos() {
    // Si se hace click o enter, se ejecuta la función para buscar el trago.
    botonBusqueda.addEventListener("click", buscarTrago);
    inputBusqueda.addEventListener("keypress", function (event) {
        //evento === "Enter"
        if (event.keyCode === 13) {
            buscarTrago();
        }
    });

}
