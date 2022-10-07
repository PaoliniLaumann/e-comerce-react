
<h1 align="center">Hola! Soy German Paolini Laumann</h1>

## Descripción
<h3>Este proyecto lo estoy realizando para el curso de React en Coderhouse, Sera un E-comerce de productos tecnologicos</h3>
<h3>Como herramientas extra se utilizan "Material UI" como libreria principal para el estilo del sitio , "React Router DOM" para implementar enrutamiento dinámico en toda la aplicación web y se agrega "Sweet Alert" para algunas interacciones con el usuario. </h3>
<h3 >Se utiliza React Hook Form para realizar la validacion del formulario de Compra </h3>
<h3>Como base de datos se utiliza Firebase tanto como para carga de los productos como para las ordenes de compra y manejo de stock</h3>

# [![CSS](https://img.shields.io/badge/Link%20al%20sitio-blueviolet)](https://e-comerce-react-lime.vercel.app/)

# [Compu Mundo - App con React.js](https://e-comerce-react-lime.vercel.app/)

## COMANDOS

Create a new React app
`npx create-react-app name`

Develop mode
`npm start`

React Router Dom
`npm install react-router-dom`

React Icons
`npm install react-icons --save`

Firebase v 8.9.1
`npm install firebase@9.10.0`

React-hook-form v 7.36.1
`npm install react-hook-form`

Sweet Alert 2
`npm install sweetalert2`

### Home

La web consta de una página principal donde se puede ver todos los productos que hay en la pagina. En la barra de navegación se puede elegir entre las tres categorías de productos para visualizar. El logo de Home lleva nuevamente a la visualización de todos los productos. Tambien contamos con el icono del Carrito donde nos muestra cantidad de productos agregados y sirve como un vinculo rapido para navegar hacia el. 

[![home.jpg](https://i.postimg.cc/44FdvDT4/home.jpg)](https://postimg.cc/vDfbbSBC)


### Categorías

La vista de Categorias es la siguiente:

[![categoria.jpg](https://i.postimg.cc/Vs7Rqk6S/categoria.jpg)](https://postimg.cc/5jCL1181)


### Detalle de Producto

Cada card de productos muestra una imagen principal mas tres imagenes con diferentes vistas, un detalle que muestra una breve información del producto, cantidad en stock y la botonera para agregar cantidad de productos al carrito. El id del producto es agregado automaticamente por firebase.

[![detalle.jpg](https://i.postimg.cc/ZncKdQZ3/detalle.jpg)](https://postimg.cc/LgJpdNJ6)

### Carrito

El carrito muestra la totalidad de los productos elegidos y dispone nuevamente de un contador para agregar o quitar cantidades del producto. Tiene un máximo según stock del producto. Además tiene botones para borrar individualmente los productos y la totalidad. Aqui se utiliza el Local Storage para mejorar la experiencia de usuario.
 

[![carrito.jpg](https://i.postimg.cc/pL9RWr9K/carrito.jpg)](https://postimg.cc/hXqHMS1G)

### Formulario

El formulario de generación de la orden consta con una validación completa, donde no se pueden dejar secciones vacías, introducir letras en el numero de telefono o numeros en el nombre. Además el e-mail debe si o si tener la estructura de un mail real para poder validarse. Todos los campos responden con un error si se introduce información inválida.

Al introducir correctamente la información, se muestra un cartel de éxito en la compra con la id del pedido, otorgada automaticamente por firebase y automaticamente descuenta del stock inicial.

[![formulario.jpg](https://i.postimg.cc/zXv17vF4/formulario.jpg)](https://postimg.cc/mhvq2bqS)

### Control del Stock
Este control nos permite que en el caso de producirse una compra simultanea entre dos usuarios solo permita la compra al primero que la realizo, y muestra la notificacion al usuario que no pudo realizarla.

[![control-de-Stock.jpg](https://i.postimg.cc/c4p53L9R/control-de-Stock.jpg)](https://postimg.cc/Yhx3KMw0)


<h3 align="center">Lengujes Utlizados:</h3>
<p align="center"> <a href="https://mui.com/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/33663932?v=4&s=1920" alt="MUI" width="40" height="40"/> </a> <a href="https://v4.mui.com/components/material-icons/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png" alt="firebase" width="40" height="40"/> </a>  
