
/**
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */


function factorial (n){

if(!isNaN(n) && n >= 1){  
    console.log(`Su numero es ${n}`);
    if (n === 1){
        return 1;  
        }
    } else{ 
        console.log("ERROR");
        return NaN;
    }
}

//No completado