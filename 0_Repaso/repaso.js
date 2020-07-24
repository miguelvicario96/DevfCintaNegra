//Mutables

//console.info(name); //Undefined
var name = 'Miguel';
var name = 'Angel'; //Se puede re-declarar

console.info(name);


//console.info(lastName); //Error
let lastName = 'Vicario';
lastName = 'Flores'; //No se puede re-declarar

console.info(lastName); 



//Inmutables
//console.info(age); //Error
const age = 24; //No puede cambiar su valor

console.log(age);



//Funciones

console.info(suma(1, 2)); //Funciona
function suma(num1, num2) {
    return num1 + num2;
}

console.info(suma(1, 2));


//console.info(resta(1, 2)); //Error
const resta = function(numero1, numero2) {  //Funciones anónimas (siempre ponerlo en un const)
    console.log(this);
    return numero1 - numero2;
}

console.info(resta(1, 2));


const multiplicacion = (num1, num2) => {  //Arrow functions
    //console.log(this); //This no funciona en Arrow functions
    return num1 * num2;
}

console.info(multiplicacion(1, 2));