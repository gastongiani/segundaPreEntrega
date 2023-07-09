// Capturar entrada del usuario
var operacion = prompt("¿Qué operación deseas realizar? (suma/resta)");

// Declarar variables y objetos necesarios
var resultado = 0;
var continuar = true;

// Función para realizar la suma
function sumar(a, b) {
  return a + b;
}

// Función para realizar la resta
function restar(a, b) {
  return a - b;
}

// Ciclo mientras el usuario quiera continuar
while (continuar) {
  // Capturar entradas del usuario
  var num1 = parseInt(prompt("Ingresa el primer número:"));
  var num2 = parseInt(prompt("Ingresa el segundo número:"));

  // Realizar la operación según el condicional
  if (operacion === "suma") {
    resultado = sumar(num1, num2);
    console.log("El resultado de la suma es: " + resultado);
  } else if (operacion === "resta") {
    resultado = restar(num1, num2);
    console.log("El resultado de la resta es: " + resultado);
  } else {
    console.log("Operación no válida");
  }

  // Preguntar al usuario si desea continuar
  var opcion = prompt("¿Deseas realizar otra operación? (sí/no)");
  if (opcion.toLowerCase() === "no") {
    continuar = false;
  }
}

// Simulador interactivo: Juego de adivinanzas

// Generar un número aleatorio entre 1 y 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Función para comprobar si el número es correcto
function adivinarNumero(numero) {
  if (numero === numeroAleatorio) {
    alert("¡Felicitaciones! Adivinaste el número.");
  } else if (numero < numeroAleatorio) {
    alert("El número es mayor. Sigue intentando.");
  } else {
    alert("El número es menor. Sigue intentando.");
  }
}

// Ciclo hasta que se adivine el número
while (true) {
  // Capturar entrada del usuario
  var numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  // Llamar a la función para comprobar el número
  adivinarNumero(numeroIngresado);

  // Salir del ciclo si se adivina el número
  if (numeroIngresado === numeroAleatorio) {
    break;
  }
}
