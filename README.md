# README del Proyecto BebiDrink

![GitHub Repo Size](https://img.shields.io/github/repo-size/BebiDrink/bebidrink_webpage?style=for-the-badge)
![GitHub Contributors](https://img.shields.io/github/contributors/BebiDrink/bebidrink_webpage?style=for-the-badge)
![GitHub Last Commit](https://img.shields.io/github/last-commit/BebiDrink/bebidrink_webpage?style=for-the-badge)
![GitHub Top Language](https://img.shields.io/github/languages/top/BebiDrink/bebidrink_webpage?style=for-the-badge)

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=for-the-badge&logo=javascript)
![HTML](https://img.shields.io/badge/-HTML-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/-CSS-blue?style=for-the-badge&logo=css3)
![jQuery](https://img.shields.io/badge/-jQuery-blueviolet?style=for-the-badge&logo=jquery)
![Vanta](https://img.shields.io/badge/-Vanta.js-444444?style=for-the-badge)
![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?style=for-the-badge&logo=google-fonts)
![Font Awesome](https://img.shields.io/badge/-Font%20Awesome-339AF0?style=for-the-badge&logo=font-awesome)
![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages-181717?style=for-the-badge&logo=github)


Este es el README del proyecto para el **Trabajo Práctico Obligatorio Codo a Codo 4.0 Fullstack Python** - Parte de Front-End. Aquí encontrarás información relevante sobre el proyecto, incluyendo los autores, la descripción, las librerías utilizadas, las funcionalidades específicas implementadas y las páginas HTML disponibles.

## Descripción

El proyecto fue desarrollado por [Gabriela Rincón](https://github.com/gabrielaRincon87) y [Juan Esparza](https://github.com/Jesparzarom). El objetivo del proyecto es crear un sitio web (de fantasía ) de vinos, bebidas, bar delivery y cócteles, donde los usuarios puedan buscar tragos, conocer recetas y pedir productos, pedir barman o simplemente obtener información sobre productos relacionados.

## Funcionalidades Específicas


El proyecto incluye las siguientes funcionalidades específicas:

- **Ajax**: Se utiliza la tecnología Ajax para realizar solicitudes asíncronas y mejorar la interactividad del sitio. Esta funcionalidad se utiliza en la página de búsqueda de tragos, donde se realizan solicitudes a las siguientes APIs de terceros:
  - [TheCocktailDB](https://www.thecocktaildb.com): Se utiliza para obtener imágenes sobre los tragos buscados por los usuarios.
  - [Api-ninjas](https://www.api-ninjas.com/api/cocktail): Se utiliza para obtener información adicional sobre los tragos buscados.

- **Formulario y Validación**: El sitio cuenta con un formulario que incluye una validación en el lado del cliente para garantizar la correcta introducción de los datos por parte del usuario. Este formulario se utiliza en la página de contacto, donde los usuarios pueden enviar mensajes y consultas.

- **Modal de Validación de Edad**: Se utiliza un modal para solicitar la confirmación de edad antes de acceder al contenido del sitio. Este modal se implementa en la página principal del sitio, antes de que los usuarios puedan acceder a cualquier otra sección.

- **Enlaces a Redes Sociales y Teléfono**: Se incluyen enlaces funcionales (demo) a las redes sociales y al número de teléfono de contacto. Estos enlaces se encuentran presentes en todas las páginas del sitio, permitiendo a los usuarios acceder rápidamente a las redes sociales y contactar a la empresa.

- **Iframe**: - Se incorporó un mapa de Google Maps en el footer mediante el uso de un iframe, para facilitar la ubicación y la interacción con la empresa.

- **Diseño responsive**: El sitio cuenta con un diseño responsivo obtenido de estilos propios basados en grid y flexbox.

- **Animaciones**: Se utilizarón animaciones tanto en el header de la página principal como en el loader de la página de recetas al buscar un trago.  

## Librerías Utilizadas


En este proyecto se han utilizado las siguientes librerías:

- **Vanta.js**: Se utiliza Vanta.js en su última versión para generar animaciones visuales en el header de la página principal. Esta librería se utiliza para crear efectos de niebla y otros efectos visuales atractivos.

- **Font Awesome**: Se utilizan los iconos de Font Awesome Estos iconos se utilizan en diferentes secciones del sitio para mejorar la visualización de elementos interactivos y proporcionar una experiencia más atractiva al usuario.

- **Axios**: Se utiliza Axios  para realizar solicitudes HTTP asincrónicas desde el cliente hacia las APIs de terceros utilizadas en el proyecto. Esta librería simplifica el proceso de realizar peticiones y manejar las respuestas.

- **jQuery**: Se utiliza la versión 3.6.4 de jQuery (compatibilidad) para simplificar la inicialización y funcionalidad de algunas librerías como Vanta.js. No se usó para otros scripts mas que los inicializadores de vanta.

- **Google Fonts:** Se utiliza Google Fonts para mejorar la tipografía y el estilo de texto en el sitio web con el fin de proporcionar una apariencia visual atractiva y coherente en todo el sitio.

- **Normalize.css:** Se utiliza Normalize.css para establecer una base de estilos coherente y consistente en todas las plataformas y navegadores. Esta librería elimina las inconsistencias de estilo predeterminadas de los navegadores, lo que facilita el desarrollo y la creación de una experiencia de usuario uniforme en todo el sitio.

## Páginas HTML

El proyecto cuenta con las siguientes páginas HTML:

- **Inicio**: Esta es la página principal del sitio, donde se utilizan las animaciones generadas con Vanta.js para crear un efecto visual atractivo y captar la atención de los usuarios desde el primer momento.

- **Nosotros**: En esta página se encuentra información detallada sobre el equipo o la empresa responsable del sitio. Aquí los usuarios pueden conocer más acerca de la historia y los valores de la empresa ficticia.

- **Productos**: Esta página muestra los productos principales del sitio y utiliza datos en formato JSON propios para mostrar la información relevante.

- **Recetas**: En esta página se presenta un buscador de recetas relacionadas con cócteles. Los usuarios pueden explorar diferentes recetas y aprender a preparar sus tragos favoritos.

- **Contacto**: En la página de contacto, los usuarios pueden completar un formulario para enviar mensajes y consultas.

