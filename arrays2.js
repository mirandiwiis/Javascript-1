/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

let totalPrice = 0;

shoppingCart.forEach(product => {
    totalPrice += product.price;
});


/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
  A continuación filtra el array para mostrar todas las tareas que están completadas y luego todas las tareas que 
  están pendientes.
*/
/* Usar filter*/ 

const toDoList = [
    {task: 'clean dishes', completed: true},
    {task: 'go shopping', completed: false},
    {task: 'make bed', completed: false},
    {task: 'make breckfast', completed: true},
]


const completedTasks = toDoList.filter(function (currentState){
    return currentState.completed === true;
})

const notCompletedTasks = toDoList.filter(function (currentState){
    return currentState.completed === false;
})


/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en 
    cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/
/* user map */

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];

const treeFruits

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/



/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

const newshoppingCart = shoppingCart.map (producto => {
    return producto.quantity -1;

})