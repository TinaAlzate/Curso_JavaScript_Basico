// Listas, objetos y como se definen las fechas

//Qué es una lista? También se puede llamar array o arreglo, es un conjunto de variables puestas en orden

const lista = [1, 'hola', undefined, null]; //esta es la forma mas visual de hacerlo
const lista2 = new Array(1, 'hola', undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Qué es un objeto? JS es un lenguaje orientado a obejtos, los objetos dentro de JS son representaciones en datos de objetos de la vida real
// Las contantes no permiten cambiar el valor del propio elemento en este caso móvil, pero si el de sus atributos en este caso marca
const movil = {
    altura: 10,
    anchura: 5, 
    marca: 'Xiaomi',
    isWhite: false,
    contactos: ['Gorka', 'Raúl', 'Valentina'],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 32
    },
    // Si necesitaramos nombrar un atributo con un guión tendriamos que definirlo entre comillas 
    "altura-tarjeta": 4
}
movil.anyo = 2019;
movil.marca= "Samsung"

console.log(movil.marca)

//Cómo se definen las fechas? existen librerías de apoyo moment.js

const ahora = new Date();
console.log(ahora)

const fecha_milis = new Date(10); //La fecha 0 es 01/01/1970 utilizando mili segundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020"); // Utilizando una fecha especifica como string
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15); // utulizando una fecha especifica como number 
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo)