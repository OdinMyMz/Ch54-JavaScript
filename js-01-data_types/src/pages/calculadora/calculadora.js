/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300

 const edad = document.getElementById('birthdate').value;
*/

function calcularEdadEnMeses(anios) {
    // Validar que el valor sea un número positivo
    if (isNaN(anios) || anios < 0) {
        return null;
    }
    
    // Calcular la edad en meses (12 meses por año)
    return anios * 12;
}

function mostrarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}

function manejarCalculo() {
    const edadAnios = parseInt(document.getElementById('birthdate').value);
    const edadMeses = calcularEdadEnMeses(edadAnios);

    if (edadMeses === null) {
        mostrarResultado("Por favor ingresa un número válido");
    } else {
        mostrarResultado(`Tu edad en meses es: ${edadMeses}`);
    }
}

function inicializarAplicacion() {
    document.getElementById('calculate').addEventListener('click', manejarCalculo);
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarAplicacion);