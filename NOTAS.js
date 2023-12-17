/*
ARRAYS:
- Como recorrer un array 
- Convertir arrays en otro tipo de datos...

Todas las propiedades que vamos a llamar son funciones
- Propiedad forEach
*/

// - Propiedad forEach (recorre cada elemento del array)

const shoppingCart = [
    { product: 'red wine', price: 20 },
    { product: 'water ', price: 1 },
    { product: 'pizza', price: 10 },
]

let totalPrice = 0;

shoppingCart.forEach(function(product){
    totalPrice += product.price;
});


/* 
Propiedad filter:
    Tiene que devolver verdadero o falso.
    nos devuelve un array con todos los elementos que cumplen la variable que hemos puesto.
    Filter se declara en una constante (forEach no)
    */

const myArray = [2, 5, 'hola', 'adios', 7];
const onlyNumbers = myArray.filter()

/* Propiedad .sartsWith utilizada para filtrar los strings que empiecen por ''x'' */

/* 
Propiedad .map:
    Te da un nuevo array con la propiedad/es indicada/s en la function o modificaciones de la misma/s
    Operes con las mimas propiedades del array añadiento o modificando.
    */

/* 
Propiedad .find:
    Sirve para encontrar una propiedad o elemento especifico dentro de un array, si no encuentra ninguna te devuelve undefined
    .some te devuelve true / false si hay algun elemento que cumpla
    .every te devuelte true o false si todos los elementos cumplen
    */


/* NOTAS DOM */

// .querySelector y .querySelectorAll

    // BUSCAR Y GUARDAR EN UNA VARIABLE TODOS LOS ELEMENTOS IMG DE MI WEB

    const myImg = document.querySelectorAll('img')
    console.log(myImg)

    // RECORRER TODOS LOS ELEMENTOS IMG ENCONTRADOS Y SUSTITUIR EL SRC

    myImg.forEach(imgNode => {
        imgNode.src = 'https://www.google.com/search?sca_esv=580203348&rlz=1C1CHBF_esES975ES975&sxsrf=AM9HkKmKF2qAXrM9o8SfTU0ZDcY2GnkPBA:1699386649564&q=gatitos+bebes&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwif9tTM1LKCAxVaU6QEHYdgC5EQ0pQJegQICxAB&biw=1920&bih=963&dpr=1#imgrc=3eJhG1t71DcytM'
    })

    // CAMBIAR SOLO LA 1ª IMG DE LA WEB

    document.querySelector('img').src = '//aqui el link de la img'
        /*.querySelector = altera el 1er elemento
        .querySelectorAll = altera TODOS
        */

// .getElementById = obtenermos el elemento html a través de su id, no es muy utilizado

// Para secleccionar por id, clase, etiqueta lo hacemos tmb con querySelector:

document.querySelector('#logo')//...selector por ID
document.querySelector('.logo')//...selector por clase
document.querySelector('a.logo')//...selector por clase con etiqueta html a delante (etiqwueta a con la clase logo**)

//Ejercicio que hicimos en clase sobre la página de Amazon:
    //Inspeccionamos y buscamos la clase 

        // 1. OBTENER UN ARRAY CON TODOS LOS ELEMENTOS TITULO DE PRODUCTO
            document.querySelectorAll('.octopus-dlp-asin-title')

        // hemos cambiador el texto de todos los titulos
            document.querySelectorAll('.octopus-dlp-asin-title a').forEach(Element => {
                Element.innerText = 'esta clase es divertidisima';
            });

        // OBTENER  UN ARRAY CON TODOS LOS ELEMENTOS ESTRELLAS
            document.querySelectorAll('.oct-acs-asin-review')

        // cambiar la valoracion del primero a 0
        // TENEMOS QUE eliminar la clase de 4 estrellas y añadir una nueva de 0 estrellas
        document.querySelector('.oct-acs-asin-review').classList.remove('a-star-mini-4')
        document.querySelector('.oct-acs-asin-review').classList.add('a-star-mini-0')

        // OBTENER UN ARRAY CON TODOS LOS ELEMENTOS OFERTAS
        document.querySelectorAll('.oct-deal-badge-container')

        //OBTENER UN ARRAY CON TODOS LOS ELEMENTOS NUJMERO DE VALORACIONES
        document.querySelectorAll('.a-size-small')

//EVENTOS //

/* Los eventos los ocasiona el usuario o el DOM
    hay eventos para saber si la pagina ha terminado de cargarse, esos son del DOM
    Si pones mal una url, si acaba un video... son eventos del DOM

    lo mas normal son reacciones para acciones que hace el usuario
        el mas comun es cuando hace click en algo
    
    Los eventos se añaden a elementos del DOM, pero tambien pueden añadirse a la pestaña en sí
    Siempre debemos ADJUNTARLOS A ALGO

    LISTENER: es el elemento que escucha y activa el evento si ocurre 
*/

    // pasos:
    //1: buscar el elemento al que quiero añadirle el evento
    //2: primero se pone el type y despues la funcion (es decir, el codigo que se va a ejecutar cunado suceda el evento)

    document.querySelector('h1').addEventListener('click', function(){
        alert('hola majo');
    }); // Este listener ejecuta: cuando clicamos en el h1 sale la alerta 'hola majo'


    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            });
        });

