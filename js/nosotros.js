
let imagenes =[];
let textoImagen=[];
let indiceArray=0;

function cambiarImagenes ()
{
  
    const imagen = document.querySelector(".slider"); 
    const p=  document.querySelector(".textoSlider"); 
    imagen.src= imagenes[indiceArray];
    p.innerHTML= textoImagen[indiceArray];

    if (indiceArray < imagenes.length -1 )
    {
        indiceArray ++;
    }

    else
    { indiceArray=0 ;}
}


function cargarSlider(datos) {
    console.log(datos);
    for (let index = 0; index < datos.nosotros.length; index++) {
      imagenes[index]= datos.nosotros[index].rutaImagen;
      console.log(imagenes[index]);
      textoImagen[index]= datos.nosotros[index].textoSlide;
    }
    console.log ("Se cargó arreglo de imagenes y textos para Slider");
cambiarImagenes();
}

  


const request = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("WARN", response.status);
    const data = await response.json();
    cargarSlider(data);
  };
  
  
  window.addEventListener("load", (event) => {
    console.log("Pagina arriba");
    const datos = request("./../data/nosotros.json");
    setInterval(cambiarImagenes, 6000); 
  
  });
  