// Comparaciones

//Igualdad 

// == Solo compara el valor
if(5 == 5){
    console.log("5 igual a 5 - Débil")
}

// === Compara el valor y el tipo
if(5 === 5){
    console.log("5 es muy igual a 5 - Fuerte")
}


let c = 4;
let d = 10;
// Diferentes en valor
if(c != d){
    console.log("c es diferente a b - Débil")
}
// Diferentes en valor o en tipo
if(c !== d){ 
    console.log("c es diferente a b - Fuerte")
}

// Comparaciones mayor que y menor que 
let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min")
}
if(max >= min){
    console.log("max es mayor o igual que min")
}
if (min < max){
    console.log("min es menor que max")
}
if(min <= max){
    console.log("min es menor o igual que max")
}