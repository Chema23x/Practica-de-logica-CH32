
/**
 * Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */

let numbers = -Infinity;


for(let i= 0; i<10; i++){
   let respuestas = parseFloat(prompt(`Ingresa el numero #${i + 1}:`));
    

    if (!isNaN(respuestas)) {
    if (respuestas > numbers) {
      numbers = respuestas;
    }
} else{
    alert("Numero invalido. Ingresa un numero valido");
    i--;
}
}
    if(numbers !== -Infinity){
    console.log(`El numero mas alto es: ${numbers} `);
    } else{
        console.log('Numero Incorrecto')
    }

