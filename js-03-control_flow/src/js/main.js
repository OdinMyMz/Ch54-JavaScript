/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const verificarEdad = edad => edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(verificarEdad(20));
console.log(verificarEdad(15));
console.log(verificarEdad(18));

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const asignarLuchador = edad =>
    edad >= 18 && edad <= 30 ? "Tu luchador es Místico" :
        edad >= 31 ? "Tu luchador es el perro Aguayo" :
            "Tu luchador es Penta";

console.log(asignarLuchador(15));
console.log(asignarLuchador(18));
console.log(asignarLuchador(25));
console.log(asignarLuchador(30));
console.log(asignarLuchador(31));
console.log(asignarLuchador(45));


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/


const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril
console.log( evaluarNombre("Milo") ); // Es de Carlos
console.log( evaluarNombre("Borrego") ); // Es de Jessica




/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje

 * Realizar dos versiones, una versión con switch y otra con if-else
 */

const velocidadVentiladorSwitch = velocidad => {
  switch(velocidad) {
    case 0:
      return "Apagado";
    case 1:
      return "Baja";
    case 2:
      return "Media";
    case 3:
      return "Alta";
    default:
      return "Velocidad desconocida";
  }
};

const velocidadVentiladorIfElse = velocidad => {
  if (velocidad === 0) {
    return "Apagado";
  } else if (velocidad === 1) {
    return "Baja";
  } else if (velocidad === 2) {
    return "Media";
  } else if (velocidad === 3) {
    return "Alta";
  } else {
    return "Velocidad desconocida";
  }
};

const velocidadVentiladorObjeto = velocidad => {
  const velocidades = {
    0: "Apagado",
    1: "Baja",
    2: "Media",
    3: "Alta"
  };
  return velocidades[velocidad] || "Velocidad desconocida";
};


console.log(velocidadVentiladorSwitch(0));    // "Apagado"
console.log(velocidadVentiladorIfElse(1));   // "Baja"
console.log(velocidadVentiladorObjeto(2));   // "Media"
console.log(velocidadVentiladorSwitch(3));    // "Alta"
console.log(velocidadVentiladorIfElse(4));   // "Velocidad desconocida"





// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa;

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


