function agregarImg(datos) {
  console.log(datos);
  const div = document.querySelector("#productos"); //container => #productos
  console.log(div);
  for (let index = 0; index < datos.bebidas.length; index++) {
    const divImg = document.createElement("div");

    /*EJEMPLO CLASES => "card col l-3 m-4 s-6" en divImg: 

     "card" => genera una carta genérica para los productos con sombreado.
     "col" => establece que se trata de una columna grid
     "l-3" => [large]noteboks en adelante => el numero son las columnas que 
              ocupa en ese tamaño de pantalla(3 columnas cada producto = fila de 4 productos).
     "m-4" => [medium] tablets => el numero son las columnas que ocupa
              en ese tamaño (4 columnas por cada producto = fila de 3 productos)
     "s-6 => [small] Celulares => 6 columas por cada producto = fila de 2 productos 
     
     NOTA: Se pueden cambiar los numeros de s, m y l. El total de columnas de Grid son
           12 columas.
      =======================================> 
    */
    divImg.className = "divProductos"; // <== ejemplo: "divProductos card col l-3 m-4 s-6" 

    div.appendChild(divImg);
    const img = document.createElement("img");
    img.src = datos.bebidas[index].rutaImagen;
    img.alt = datos.bebidas[index].name;
    img.className = "img-productos"; //productos => img-productos
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
