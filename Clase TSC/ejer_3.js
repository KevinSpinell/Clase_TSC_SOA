"use strict";
let nombres = ["Kevin", "Mauricio", "Wilder", "Andrea", "Jose"];
console.log("Ejercicio 3");
console.log("For clasico");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log("For each");
nombres.forEach((nombre, index) => {
    console.log(`Índice ${index}: ${nombre}`);
});
console.log("For of");
for (const nombre of nombres) {
    console.log(nombre);
}
