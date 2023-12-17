/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y 
  mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

let totalPrice = 0;

shoppingCart.forEach(product => {
    totalPrice = totalPrice + product.price * product.quantity;
});

console.log(totalPrice.toFixed(2))

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
  A continuación filtra el array para mostrar todas las tareas que están completadas y luego todas las tareas que 
  están pendientes.
*/
/* Usar filter*/ 

const tasks = [
    {task: 'clean dishes', completed: true},
    {task: 'go shopping', completed: false},
    {task: 'make bed', completed: false},
    {task: 'make breckfast', completed: true},
]


const completedTasks = tasks.filter(function (task){
    return task.completed;
});

const pendingTasks = tasks.filter(function (task){
    return !task.completed
});

console.log(pendingTasks)
console.log(completedTasks)

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en 
    cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const fruits = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandia'];

const growTypeFruits = fruits.map (fruits => {
  const growsInTree = ['manzana', 'pera', 'granada', 'platano'].includes(fruits);
  return {
    name: fruits, 
    growsInTree
  };
});

console.log(growTypeFruits)



/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart2 = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

const cartWithTaxes = shoppingCart2.map (function (item) {

  const taxes = item.price * 0.1 * item.quantity
  return {
    ...item,
    taxes: taxes.toFixed(2)
  };
});

console.log(cartWithTaxes)


/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/


const shoppingCart3 = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];


function removeItem (productName, shoppingCart) {
  const newShoppingCart = shoppingCart.map (function(item) {
    if (item.product === productName) {
      return { 
        ...item,
        quantity: item.quantity -1
      };
    }

    return item;
  });

  return newshoppingCart.filter(function (Item){
    return item.quantity > 0;
  });
};

const shoppingCartWithoutRedWine = removeItem(shoppingCart3, 'Red wine');
console.log(shoppingCartWithoutRedWine);
const shoppingCartWithoutPizza = removeItem(shoppingCart3, 'Pizza carbonara');
console.log(shoppingCartWithoutPizza);


// OTRO DIA?

// Crea 2 objetos que representen usuarios
// Crea un listado de usuarios y hacer una función que simule un buscador que dado un texto te devuelva los usuarios que coincidan con ese texto 


const users = [

  {
      name: 'Samu Ramos',
      email: 'samu97rm@gmail.com',
      brands: [metricoolES]
  },

  {
      name: 'Laura Eshi',
      email: 'lauraesteban@metricool.com',
      brands: [metricoolES]
  },

]

function searchUsers(searchString) {

  return users.filter(function (user) {
      return user.name.includes(searchString);
  });

}

searchUsers()

// declarar una funcion que recorra la array y compruebe conrtiene el string buscado
