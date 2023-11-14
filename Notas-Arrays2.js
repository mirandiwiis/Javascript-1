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

/* 
07/11

Correcciónde ejercicios

1. se debe multiplicar por la cantidad de veces que tenemos cada producto
se declara la constante let TotalPrice para saber que la constante parte de 0

*for each como unico proposito es recorrer el array, por tanto no se declara como constante
.tofixed(2) lleva el numero a solo 2 decimales


2. Cuando tratamos parametros true y false no usamos === true, usamos directametne el parametro y si es en negativo el parametro con una exclamacion delante
la exclamacion es negación (!trask.completed significa que no estan completed, su estado es false)

3. queremos crear un listado de objetos con cada fruta, que tiene 2 propiedades (nombre y si crece en un arbol)
- en nuestra manera hemos declarado una constante "growsinTree" donde establecemos un array con las frutas que son de arbol. 
Utilizamos .includes(fruits) para comparar nuestra array con la array fruits. De modo que le decimos a la maquina que compare la nueva array con fruits
la forma mas común de hacerlo:
es compoarando con if y ||

4. devolver la misma array con una propiedad mas, las taxes
item aqui e sel objeto

tener cuidado con el uso .toFixed porqeu convierte el nunmero en cadena de texto
Se suele utilizar de cara al usuario

5. La idea es crear una FUNCIÖN que el nombre de entrada sea el nombre del producto

Tenemos que recorrer el array para crear un nuevo array que reste uno al parametro quabntity
*/


