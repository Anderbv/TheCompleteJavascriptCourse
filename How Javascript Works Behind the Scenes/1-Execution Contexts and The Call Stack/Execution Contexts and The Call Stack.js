//Como se ejecuta el codigo de javascript?

//ya sabemos que sucede en el callstack
//Que es un contexto de ejecucion?
//es un concepto abstracto pero lo definimos
//basicamente como un entorno en el que se ejecuta
//una parte de javascript
//Es como una caja que almacena toda la informacion necesaria
//para que se ejecute algun codigo
//como variables locales o argumentos pasados a una funcion
//Entonces el codigo de js siempre se ejecuta dentro de un
//contexto de ejecucion.

//Para hacer esto más intuitivo, imaginemos que pedimos pizza
//para llevar. Entonces por lo general, la pizza viene en una caja, verdad?
//Y tambien puede venir con algunas otras cosas que son necesarias para
//nosotros como unos cubiertos o un recibo para que pueda pagar la pizza
//antes de comerla

//Entonces en este analogia javascript, la pizza es el codigo javascript que
//se ejecutara, la caja por supuesto el contexto de ejecucion de nuestra pizza
//Y eso es porque comer pizza ocurre dentro de la caja, que es el entorno para
//comer pizza

//La caja contiene la pizza y el recibo que son necesarios para comerse una pizza
//En otras palabras que son necesarias para ejecutar el codigo

//Para todas y cada una de las funciones se creara un contexto de ejecucion que
//contendra toda la informacion necesaria para ejecutar exactamente la funcion

//Todos los contextos de ejecucion juntos, forman la pila de llamadas que mencionamos
//antes.

//Ahora cuando todas las funciones hayan terminado de ejcutarse, el motor
//basicamente seguira esperando a que llegen funciones de devolucion de llamada
//para poder ejecutarlas

//Por ejemplo una funcion de devolucion de llamda asociada con un evento de clic
//Recuerde que el bucle de eventos es el que proporciona estas nuevas funciones de devolucion
//de llamada

//Que hay dentro de un contexto de ejecucion

/*
Whats inside Execution Context
1 - Variable Environment
    => let, const and var declarations
    => funcions
    => arguments object
*/

//Lo primero que encontramos es el entorno varibale.
//En este entorno nuestras variables y declaraciones de funciones se almacenan y tambien
//hay un objeto de argumentos especiales, este objeto contiene todos los argumentos
//que se pasaron a la funcion a la que le pertenece el contexto

//Recordemos que cada funcion obtiene su propio contexto de ejecucion tan pronto como
//se llama a la funcion.

//Entonces basicamente, todas las variables que de alguna manera se declaran dentro de una funcion
//terminan en su entorno de variables

//Sin embargo una funcion tambien puede acceder a variables fuera de la funcion.
//Esto funciona debido a algo llamado =>CADENA DE ALCANCE<=

/*
2 - Scope chain

*/

//La cadena de alcance basicamente consiste en referencias a variables que se encuentran fuera de la funcion
//actual

//Para hacer un seguimiento de la cadena de alcance, se almacena en cada contexto de ejecucion.

//Finalmente cada contexto tambien obtiene una variable especial llamada =>THIS<=

/*
3 - Keyword This
*/

//Lo relacionado a this lo veremos despues

//Ahora el contenido del contexto de ejecucion, el entorno variable,
//la cadena de alcance y esta palabra clave this se genera en la denominada
//fase de creacion

//Lo que sucede justo antes de la ejecucion.

//Un detalle final pero muy importante que debemos tener en cuenta, es que lo contextos
//de ejecucion que pertenecen a funciones de flecha, no obtienen sus palabras
//clave de argumentos, ni obtienen la palabra this

//Entonces basicamente las funciones de flecha no tienen el objeto de argumentos y
//la palabra clave this
//En su lugar pueden utilizar el objeto de argumentos y la palabra this de su funcion
//principal regular más cercana

//Podriamos pensar en el callstack como un mapa para el motor de javascript porque la
//pila de llamadas asegura que el orden de ejecucion nunca se pierda
//Al igual que lo hace un mapa, al menos si lo usa correctamente

//El programa una vez acabe con la pila de ejecucion entonces el programa
//permanecerá en este estado(en el contexto de ejecucion global) para siempre hasta que finalmente se termine.
//Y eso solo sucede cuando cerramos la pestaña del navegador
//Solo cuando el programa este realmente terminado de esta manera, es cuando el contexto de ejecucion
//global se extrae de la pila.

//ENTONCES DEBERIAMOS PENSAR DE ESTA FORMA, CUAL?
//De la forma en que el codigo se ejecuta dentro de los contextos de ejecucion que estan en la pila.

const name = 'Jonas';

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    return a;
}

function second(x, y) {
    //arguments: [7, 9]
    let c = 2;
    return c;
};

const x = first();

//Podriamos pensar que en el callstack se apilan contextos de ejecucion 