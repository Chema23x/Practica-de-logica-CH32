/**
 * User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */

let user;
let age;
let favoriteMovie = [];

user= prompt("What is your name?");
    console.log("Usuario: " + (user));

while (true){
age= prompt("What is your age?");
age= parseFloat(age);

  if(!isNaN(age)){
    console.log("Edad: " + (age) + "años")
    break;
  } else{
    alert("Edad invalida, reingresa tu edad");
  }
}

    let numberMovies= prompt("How many favorite movies do you have?")
    for(let i=0; i<numberMovies; i++){
    let movie = prompt(`Enter the name of favorite movie #${i+1}:`);
    favoriteMovie.push(movie);
 }  
    console.log("Pelicula favorita: ");
  for (let i=0; i<favoriteMovie.length;i++){
    console.log(`The film "${favoriteMovie[i]}" is one of my favorites`)
  }



























