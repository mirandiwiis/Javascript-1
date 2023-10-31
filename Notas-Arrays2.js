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

/* Propiedad .sartsWith utiliada para filtrar los strings que empiecen por ''x'' */