function agregarImg(datos) {
  console.log("estoy en agregar img" );
  console.log(datos);
  const div = document.querySelector("#productos"); //container => #productos
  console.log (datos[1]); 
  datos.forEach(element => {
    console.log(element);
    console.log("estoy en el for img" );
    const divImg = document.createElement("div");
    divImg.className = "card l-3 m-4 s-12 "; // <== ejemplo: "divProductos card col l-3 m-4 s-6" 

    div.appendChild(divImg);
    const img = document.createElement("img");
    img.src = element.imagen;
    img.alt = element.nombre;
    img.className = "img-productos"; //productos => img-productos
    const p = document.createElement("p");
    p.textContent = element.nombre;
    const precio = document.createElement("p");
    precio.textContent =  '$' + element.precio;
    const stock = document.createElement("p");
    stock.textContent =  'Stock: ' + element.stock;
    
    console.log(element.nombre);
    console.log(element.precio);
    divImg.appendChild(img);
    divImg.appendChild(p);
    divImg.appendChild(precio);
    divImg.appendChild(stock);
    divImg.appendChild(document.createElement("br"));
  });
  
  

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
   

  
}

const request = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("WARN", response.status);
  const data = await response.json();
  agregarImg(data);
};
//const datos = request("http://127.0.0.1:5000/productos");
const datos = request("https://bebidrink.pythonanywhere.com/productos");

window.addEventListener("load", (event) => {
  console.log("Pagina arriba");
});
