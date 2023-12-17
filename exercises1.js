// CLase = 24/10

/*
1.  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/

function isBetween0To10 (number) {
    return (isBetween0To10 >= 0 && isBetween0To10 <= 10);
}

/*
2.  Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/

function checkIfStringOrNumber (charactersToCheck)  {
    return typeof charactersToCheck === 'number' || typeof charactersToCheck === 'string';
}


/*
3. Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
  me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

const ifPending = (text1) => {
    return (text1.toLowerCase() === 'pending');
}


/* 
4.  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/


creditCardSimulation = function(productPrice, creditUsed, monthLimit) {
    const totalSpend = productPrice + creditUsed;

    if( totalSpend <= monthLimit) {
        return totalSpend;
    } 
        return ('No se puede realizar la compra, ha alcanzado el limite mensual');
}
    // los return paran el flujo de ejecución del codigo

    // Necesito función que indique que se ha llegado al limite (no se puede comprar)
    //Necesito una función que devuelva el valor (dinero gastado este mes + precio del producto comprado)

/*
5.  Crea una función que indique si un número es par o impar.
*/

const isEven = (number) => {
    return number % 2 === 0; 
}


/*
6.  Crea una función que indique el mayor de dos números
*/
 const greaterNum2 = function(num1, num2) {
    if(num1 === num2) {
    return('Ambos valores son iguales');
    } else if(num1 > num2) {
    return(num1);
    } else { 
    return (num2);
    }
 }


/*
7.  Crea una función que indique el mayor de tres números
*/

const greaterValue = function(val1, val2, val3) {
    if(val1 === val2 && val2 === val3) {
    return(val1);
    } if(val1 > val2 || val1 > val3) {
    return(val1);
    } if(val2 > val1 || val2 > val3) {
    return(val2);
    } if(val3 > val1 || val3 > val2) {
    return(val3);
    }
}

/*
8.  Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
*/

const ageBetween = function(age1,age2) {
    if(age1 > age2) {
        return (age1 - age2);
    } else {
        return (age2 - age1);
    }
}

const diferenciaEdad = (edad1,edad2) => {
    return Math.abs (edad1 - edad2)
}


/* 
9. Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso, aprobado, bien, 
 notable o sobresaliente.
*/

const degreeEvaluation = (degreeToCheck) => {
    if(typeof degreeToCheck !== 'number') {
        console.log('El valor introducido debe ser un numero comprendido entre 0 y 10');
    } else if(degreeToCheck < 0 ) {
        console.log('El valor introducido debe ser un numero comprendido entre 0 y 10'); 
    } else if (degreeToCheck > 10) {
        console.log('El valor introducido debe ser un numero comprendido entre 0 y 10');
    } else if(degreeToCheck >= 0 && degreeToCheck <= 4) {
        console.log('Suspenso');
    } else if(degreeToCheck === 5) {
        console.log('Aprobado');
    } else if(degreeToCheck === 6) {
        console.log('Bien');
    } else if(degreeToCheck >= 7 && degreeToCheck <= 8) {
        console.log('Notable');  
    } else {
        console.log('Sobresaliente');
    }
}

/*
10.  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/


const actualSeason = function(month, day) {

    if(typeof month !== 'string' || typeof day !== 'number') {
        console.log('Los valores introducidos son erroneos');

    } else if (day <= 0 || day > 31) {
        console.log('¿En que mundo vives?');

    } else if( day === 31 && (month === 'Febrero' || month === 'Abril' || month === 'Junio' || month === 'Septiembre' || month === 'Noviembre')) {
        console.log('Recuerda, hay meses que no tienen 31 dias.');

    } else if(month === 'Febrero' && day > 29) {
        console.log('Piensa claro, Febrero no tiene tantos dias.')

    } else if ((month === 'Marzo' && day >=21 && day <= 31) || (month === 'Junio' && day >= 1 && day <= 20) || month === 'Abril' || month === 'Mayo' ) {
        console.log('Primavera');
    
    }else if ((month === 'Junio' && day >= 21) || (month === 'Septiembre' && day >= 1 && day <= 22) || month === 'Julio' || month === 'Agosto') {
        console.log('Verano');
    
    } else if((month === 'Septiembre' && day >= 23 && day <= 30) || (month === 'Diciembre' && day >= 1 && day <= 21) || month === 'Octubre' || month === 'Noviembre' ) {
        console.log('Otoño');

    } else {
        console.log('Invierno')
    }
}


/*
11.  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser eléctricas o de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/

const vehicleType = function(numberOfWheels, engineeType, hasPedals) {
    
    if(numberOfWheels === 4 && !hasPedals && (engineeType === 'electrico' || engineeType === 'gasolina')) {
        return('coche');

    } if(numberOfWheels === 2 && !hasPedals  && engineeType === 'gasolina') {
        return('moto');

    }if(numberOfWheels === 2 && !hasPedals  && (engineeType === 'electrico' || engineeType === 'manual')) {
        return('patinete');

    }if(numberOfWheels === 2 && hasPedals && (engineeType === 'electrico' || engineeType === 'manual')) {
        return('bicicleta');
    } 
        return('desconocido');
}

// Clase = 30/10
// cambiar el codigo de esta funcion para usar un objeto

const vehicleTypeWithObject = (vehicle) => {
    const wheels = vehicle.wheels;
    const enginee = vehicle.enginee;
    const hasPedals = vehicle.hasPedals;

    if(wheels === 4 && !hasPedals && (enginee === 'electric' || enginee === 'gasolina')) {
        return 'coche';

    } if(wheels === 2 && !hasPedals  && enginee === 'gasolina') {
        return 'moto';

    }if(wheels === 2 && !hasPedals  && (enginee === 'electric' || enginee === 'manual')) {
        return 'patinete';

    }if(wheels === 2 && hasPedals && (enginee === 'electric' || enginee === 'manual')) {
        return 'bicicleta';
    } 
        return 'desconocido';
}
const car = {
    wheels: 4,
    enginee: 'gasolina',
    hasPedals: false,
}

const carElectric = {
    wheels: 4,
    enginee: 'electric',
    hasPedals: false,
}

const moto = {
    wheels: 2,
    enginee: 'gasolina',
    hasPedals: false,
}

const patinElectric = {
    wheels: 2,
    enginee: 'electric',
    hasPedals: false,
}

const patinManual = {
    wheels: 2,
    enginee: 'manual',
    hasPedals: false,
}

const cycleElectric = {
    wheels: 2,
    enginee: 'electric',
    hasPedals: true,
}

const cycleManual = {
    wheels: 2,
    enginee: 'manual',
    hasPedals: true,
}
