function agregarImg(datos) {
  console.log(datos);
  const div = document.querySelector(".container");
  console.log(div);
  for (let index = 0; index < datos.bebidas.length; index++) {
    const divImg = document.createElement("div");
    divImg.className = "divProductos";
    div.appendChild(divImg);

    const img = document.createElement("img");
    img.src = datos.bebidas[index].rutaImagen;
    img.alt = datos.bebidas[index].name;
    img.className = "productos";
    const p = document.createElement("p");
    p.textContent = datos.bebidas[index].name;
    console.log(datos.bebidas[index].name);
    divImg.appendChild(img);
    divImg.appendChild(p);
  }
}

const request = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("WARN", response.status);
  console.log(response);
  const data = await response.json();
  console.log("data antes del llamado a la funcion:" + data);
  agregarImg(data);
  console.log(data);
};

const datos = request("./../data/productos.json");

window.addEventListener("load", (event) => {
  console.log("Pagina arriba");
});
