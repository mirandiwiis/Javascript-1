/*
Arrays 2:
- Como recorrer un array 
- Convertir arrays en otro tipo de datos...

Todas las propiedades que vamos a llamr son funciones
- Propiedad forEach
*/

// - Propiedad forEach

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
Tiene que devolver verdadero o faslo.
nos devuelve un array con todos los elementos que cumplen la variable qeu hemos puesto.
Filter se declara en una constante (forEach no)
*/

const myArray = [2, 5, 'hola', 'adios', 7];
const onlyNumbers = myArray.filter()

/* Propiedad .sartsWith utilizada para filtrar los strings que empiecen por ''x'' */

/* 
Propiedad .map
Te da un nuevo array con la propiedad/es indicada/s en la function o modificaciones de la misma/s
Operes con las mimas propiedades del array añadiento o modificando.
*/

/* 
Propiedad .find
Sirve para encontrar una propiedad o elemento especifico dentro de un array, si no encuentra ninguna te devuelve undefined
.some te devuelve true / false si hay algun elemento que cumpla
.every te devuelte true o folse si todos los elementos cumplen
*/