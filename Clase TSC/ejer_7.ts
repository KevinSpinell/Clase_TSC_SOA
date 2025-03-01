const numeros = [12, 45, 67, 23, 89, 14];

let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

console.log("Ejercicio 7")
console.log("Arreglo: ",numeros )
console.log(mayor)