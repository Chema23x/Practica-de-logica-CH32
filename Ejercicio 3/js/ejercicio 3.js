
/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

function timer() {
    alert(`Han pasado ${seconds} segundos`);
    console.log("ALERTA EN CURSO")
  }
  
 let seconds = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
  
  if (!isNaN(seconds) && seconds >= 0) {
    console.log(`Espere ${seconds} segundos para que suene su alarma `);
    setTimeout(timer, seconds * 1000);
  } else {
    console.log("Entrada inválida o fuera de rango");
  }