// Array de reduce
const numeros = [1, 2, 3, 4, 5];

// Utilizando reduce para sumar todos los números y obtener su promedio
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
const promedio = suma / numeros.length;

console.log("La suma de los números es:", suma);
console.log("El promedio de los números es:", promedio);


// Array de filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos el método filter para obtener solo los números pares
const numPares = num.filter(numero => numero % 2 === 0);

console.log(numPares);  