// SCOPING AND SCOPE IN JAVASRIPT: JAVASCRIPT

/*SCOPING */

// El scope controla comó el motor de javascript
// organiza y accede a la variables de nuestro programa.

// Entonces basicamente, el alcance hace la pregunta,
// Donde viven las variables?

// O donde podemos acceder a una determinada variable y donde
// no?

/*LEXICAL SCOPING */

// Ahora en javascript tenemos algo llamado alcance lexico.
// Y el alcance lexico significa que la forma en que se
// organizan y se accede a las variables totalmente controlada
// por la ubicacion de funciones y bloques del codigo del
// programa

// Por ejemplo una funcion que esta escrita de otra funcion
// tiene acceso a las variables de la funcion principal.

// Entonces nuevamente el alcance de las variables esta
// influenciado por donde escribimos exactamente nuestras
// funcion y bloque de codigo.

/*SCOPE */

// El alcance es el espacio o entorno en el que se declara
// una determinada variable, asi de simple.

// Y en el caso de las funciones, ese es esencialmente el 
// entorno variable que se almacena en el contexto de 
// ejecucion de las funciones.

/* Cual es la diferencia entre el scope y el entorno variable */

// En javascipt tenemos el alcance global, el alcance
// de la funcion y el alcance del bloque

/*SCOPE OF VARIABLE */

// El alcance de una variable es basciamente la region
// completa de nuestro codigo, donde se puede acceder 
// a una determinada variable

/*THE 3 TYPES OF SCOPE */

/*
GLOBAL SCOPE
FUNCTION SCOPE
BLOCK SCOPE(ES6)

*/

// Asi que ese es el alcance global, el alcance de la funcion
// y el alcance del bloque

// El scope es el lugar en nuestro codigo donde se declaran
// las variables.

// Y cuando decimos variables, exactamente lo mismo es 
// cierto para las funciones.
// Porque al final, las funciones son solo valore que se
// almacenan en variables.


/* *************************************************** */

//EL ALCANCE GLOBAL es una vez más para el codigo
//de nivel suporior

const me = "Jonas";
const job = "Teacher";
const year = 1989;  

// Entonces esto es para variables que
// se declaran fuera de cualquier funcion o bloque

// Estas variables estaran accesibles en todas partes
// de nuestro pograma, en todas las funciones y en todos
// los bloques.

// Entonces, realmente, en todas partes.

/* *************************************************** */

// A continuacion, todas y cada una de lasFUNCIONES crean
// un alcance

function calAge(birthYear) {
    const now = 2037;
    const age = now - birthYear;
    return age;
}

console.log(now) // ReferenceError

// Y las variables delcaradas dentro de ese alcance
//solo son accesibles dentro de esa funcion.

// A esto tambien se le llama ambito local o opuesto al
// ambito global

// Entonces, las variables locales viven en la funcion.
// por asi decirlo.

// Y fera de la funcion, las variabels no son accesibles
// en absoluto.

// Nuevamente, esto es tecnicamente lo mismo que el 
// entorno de variables de funcion, pero aun necesitamos
// darle el nombre de alcance en este contexto, por los 
// los bloques tambien crean alcances


/* *************************************************** */

/* BLOCK  SCOPE(ES6) */

if ( year >= 1981 && year <= 1996 ) {
    const millenial = true;
    const food = "Avocado toast"
}

console.log(millenial) //ReferneceError

// Los bloques tambien crean ambitos ahora.
// y con bloques nos referimos a todo lo que esta
// entre llaves, como el bloque de una instruccion if
// o un bucles for

// Entonces, al igual que con las funciones, las varibales
// declaradas dentro de un bloque solo son accesibles dentro
// de ese bloque y no fuera de él.

// Ahora la gran diferencia es que los ambitos de bloque
// solo se aplican a las variables declaradas con let o const
// de acuerdo?

// De nuevo las variables let y const estan restringidas
// al bloque en el que fueron creadas

// Por eso decimos que las varibles let y const tienen
// un alcance de bloque.

// Entonces, si declaro una variable usadando var en este
// bloque, entonces esa varibale aun seria accesible
// fuera del bloque y estaria dentro del alcance de la 
// funcion actual o del alcance global

// Y entonces decimos que var tiene un alcance de funcion

//Entonces, en ES5 y antes, solo teniamos el alcance global
//y alcance de funcion

// Y es por eso que las variables de ES5 declaradas con var,
// solo se preocupan por las funciones, pero no por los 
// bloques.

//Simplemento los ignoran


/* THE SCOPE CHAIN */

const myName = "Jonas"

function first() {
    const age = 30;

    if( age >= 30 ) {
        const decade = 3;
        const millenial = true;
    }

    function second() {
        const job = "teacher";
        console.log(`${myName} is a ${age}-old ${job}`)
    }

    second();
}

// El "secreto" de cada ambito es que siempe tiene acceso
// a todas las varibales de todos sus ambitos externos.


/*SCOPE CHAIN VS CALL STACK */

const a = "Jonas";
first1();

function first() {
    const b = "Hello!";
    second();

        function second() {
        const c = "Hi!";
        third();
    }
}

function third() {
    const d = "Hey";
    console.log(d + c + b + a);
    //ReferenceErro
}

// Estamos creando un contexto
// de ejecucion para cada llamada
// de funcion
// y llenarlo en las variables de esa
// funcion

//Ejemplicar enviorment variable 
// de cada contexto

// third() EC
// d = "Hey"

// second() EC
//c = "Hi"
//b = "Hello"
//a = "Jonas"

// first() EC
//b = "Hello"
//a = "Jonas"
//second = <Function>

//Global EC
//a = "Jonas"
//first = <Function>
//third = <Function>

// LA CADENA DE ALCANCE no tiene 
// nada que ver con el orden de los contextos
// de ejecucion en la pila de llamadas.

// LA CADENA DE ALCANCE obtiene los entornos variables
// del contexto como se muestra en las flechas rojas aquí
 
//EL ORDEN DE LAS LLAMADAS A FUNCIONES NO ES RELEVANTE
//PARA LA CADENA DE ALCACNE EN ABSOLUTO

//LA CADENA DE ALCANCE SE CONTRUYE EN EL MOTOR DE JAVASCRIPT
//DETRAS DE ESCENA