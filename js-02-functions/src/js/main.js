console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("rames");

function saludar(nombre) {
  console.log("que deseas de cosito ? " + nombre);
}



/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo) {
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Romito", "sopa de macaco");


/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

sumarDosNumeros1(10, 35);

function sumarDosNumeros1(numeroSumaUno, numeroSumaDos) {
  console.log(` la suma de ${numeroSumaUno} y ${numeroSumaDos} da como resultado : ${numeroSumaUno + numeroSumaDos}`);
}


const restarDosNumeros = function (numeroRestaUno, numeroRestaDos) {
  console.log(` la resta de ${numeroRestaUno} menos ${numeroRestaDos} da como resultado : ${numeroRestaUno + numeroRestaDos}`);
};

restarDosNumeros(35, 10);



/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

/*
(function setUp() {
  console.log("Configuracion inicial de la aplicacion");
  console.log(`valor de data ${data}`);
})(18)
*/


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.

/*function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}*/

// const areaTriangulo = (base, altura) => (base * altura) / 2;

// Función expresada (asignada a una variable)
const areaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

// Realizar una función flecha que calcule el área de un triángulo
const calculaArea3 = (base, altura) => base * altura / 2;
console.log(`Resultado usando arrow function: ${calculaArea3(12, 20)}`)


// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));
imprimirArea(12, 20);




// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

// Arrow function to calculate circle area
const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio, 2);




const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = circleArea(radio);
imprimirAreaCirculo(5);




/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = (nombre = "persona invitada") => console.log(` Hola ${nombre}, ya nos vamos a descansar`)

saludarPersona(); // Hola undefined, ya nos vamos a descansar
saludarPersona(); // Hola persona invitada, ya nos vamos a descansar
saludarPersona("Mich"); // Hola Mich, ya nos vamos a descansar



/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */





// Función principal que acepta un callback
const imprimirMensaje = (fncCallBack) => {
  fncCallBack("Hola Ch54");
};

// Primera llamada con console.log
imprimirMensaje(console.log);

// Función callback para mostrar en el párrafo
const enviarAParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  if (referencia) {
    referencia.textContent = `${saluda} ${mensaje}`;
  } else {
    console.error("No se encontró el elemento con ID 'saludo-callback'");
  }
};

// Segunda llamada con nuestro callback personalizado
imprimirMensaje(enviarAParrafo);






/* 
const imprimirMensaje = (fncCallBack) => fncCallBack("Hola Ch54");

imprimirMensaje(console.log);

const enviarAParrafo = (mensaje) => {
  const saluda = "Hola, buen dia";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`
}

imprimirMensaje(enviarAParrafo);

imprimirMensaje(alert);

*/




/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

const sumarDosNumeros = (a, b) => a + b;

const sumarEImprimir = (a, b, opcion) => {
  const resultado = sumarDosNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es :  ${resultado} `;

  // console.log(mensaje);

  if (opcion === "consola") console.log(mensaje);
  else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
  else if (opcion === "h2") document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
  else alert(mensaje);
}

sumarEImprimir(10, 14);

sumarEImprimir(10, 14, "parrafo");

const imprimirEnDOMParagraph = ( mensaje ) => {
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje ;
}

const imprimirEnDOMH2 = ( mensaje ) => {
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerText = mensaje ;
}


sumarEImprimir( 10, 15, imprimirEnDOMParagraph );

sumarEImprimir( 10, 16, imprimirEnDOMH2 );





// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120



// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
    1            ----               1
    2          2-1 = 1              2
    3          3-1 = 2              6
    4          4-1 = 3              24
    5          5-1 = 4              120
*/

