// 1. buscar y guardar en una variable todos los elementos img de mi web

const myImg = document.querySelectorAll('img')
console.log(myImg)

// 2. Recorrer todos los elementos img encontrados y cambiarler el src

myImg.forEach(imgNode => {
    imgNode.src = 'https://www.google.com/search?sca_esv=580203348&rlz=1C1CHBF_esES975ES975&sxsrf=AM9HkKmKF2qAXrM9o8SfTU0ZDcY2GnkPBA:1699386649564&q=gatitos+bebes&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwif9tTM1LKCAxVaU6QEHYdgC5EQ0pQJegQICxAB&biw=1920&bih=963&dpr=1#imgrc=3eJhG1t71DcytM'
})

// cambiar solo la primera img:

document.querySelector('img').src = '//aqui el link de la img'
/* querySelectorALl = altera TODOS, para alterar todos hay q poner .forEach
 querySelector = altera el primero de los elementos */

/* otro modo de obtener elementos en el DOM es getElementById 
= obtenemos elemento a través del id del HTML, no se utiliza, solo se utilizan "querySelector" y "querySelectorAll"

Funciona de modo que si queremos obetner un elemento por id con querySelector lo esccribimos así: */
    document.querySelector('#logo')//...selector por ID
    document.querySelector('.logo')//...selector por clase
    document.querySelector('a.logo')//...selector por clase con etiqueta html a delante (etiqwueta a con la clase logo**)

const allImages = document.querySelectorAll('img, index');

allImages.forEach(function(image, index) {
    if (index % 2 === 0) {
    image.src = 'https://ih1.redbubble.net/image.4871953130.0832/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
    } else {
        image.src = 'https://i.pinimg.com/originals/72/b9/54/72b95402a1dafcab917dec6895f6a7ab.jpg'
    }
});


// OBTENER UN ARRAY CON TODOS LOS ELEMENTOS TITULO DE PRODUCTO


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

//.toggle se utiliza para comprobar is es verdadero acrtua, si es falso hace lo contrario
document.querySelector('.oct-acs-asin-review').classList.toggle('a-star-mini-0')



// OBTENER UN ARRAY CON TODOS LOS ELEMENTOS OFERTAS

document.querySelectorAll('.oct-deal-badge-container')

//OBTENER UN ARRAY CON TODOS LOS ELEMENTOS NUJMERO DE VALORACIONES
document.querySelectorAll('.a-size-small')


//EVENTOS!!
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

