function cargarTablas(data) {
  console.log(data);

  const tbodyAperitivos = document.querySelector("#tAperitivos");
  const tbodyBebidas = document.querySelector("#tBebidas");
  const tbodyCervezas = document.querySelector("#tCervezas");
  const tbodyVinos = document.querySelector("#tVinos");

  for (let elemento of data.bebidas) {
    if (elemento.tipo === "APERITIVOS") {
      for (let producto of elemento.datos) {
        console.log(producto.precio);
        const tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
        tr.appendChild(tdNombre);
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);
        tbodyAperitivos.appendChild(tr);
        console.log("estoy en aperitivos");
      }
    } else if (elemento.tipo === "BEBIDAS") {
      for (let producto of elemento.datos) {
        console.log(producto.precio);
        const tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
        tr.appendChild(tdNombre);
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);
        tbodyBebidas.appendChild(tr);
        console.log("estoy en Bebidas");
      }
    } else if (elemento.tipo === "CERVEZAS") {
      for (let producto of elemento.datos) {
        console.log(producto.precio);
        const tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
        tr.appendChild(tdNombre);
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);
        tbodyCervezas.appendChild(tr);
        console.log("estoy en Cervezas");
      }
    } else if (elemento.tipo === "VINOS") {
      for (let producto of elemento.datos) {
        console.log(producto.precio);
        const tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
        tr.appendChild(tdNombre);
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = producto.precio;
        tr.appendChild(tdPrecio);
        tbodyVinos.appendChild(tr);
        console.log("estoy en Vinos");
      }
    }
  }
}

const request = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("WARN", response.status);
  const data = await response.json();
  cargarTablas(data);
};

window.addEventListener("load", (event) => {
  console.log("Pagina arriba");
  const datos = request("./../data/catalogo.json");
});



// Obtener todos los encabezados y contenidos del acordeón
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');
const accordionIcons = document.querySelectorAll('.accordion-icons');
const plusIcons = document.querySelectorAll('.fa-circle-plus');
const xmarkIcons = document.querySelectorAll('.fa-circle-xmark');

// Función para expandir o contraer el contenido del acordeón
function toggleAccordion() {
  const accordionContent = this.nextElementSibling;
  const accordionIcon = this.querySelector('.accordion-icons i');

  accordionContent.classList.toggle('collapsed');
  accordionIcon.classList.toggle('ocultar');
  accordionIcon.nextElementSibling.classList.toggle('ocultar');
}

// Agregar el evento click a cada encabezado del acordeón
accordionHeaders.forEach((header) => {
  header.addEventListener('click', toggleAccordion);
});
