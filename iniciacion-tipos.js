//Tipos primitivos

// number 4
// string "Hola mundo" `Hola mundo` 'Hola mundo'
// booleanos true o false -> no llevan comillas porque se convertirian en string
// null un espacio vacio en memoria
// undefined -> un valor que todavía no esta asignada en memoria o no esta definido

//Cuáles son las diferencias entre null, undefined, false, 0 // su similitud es que todas son falsy
let nulo = null;
if(nulo){
    console.log("se cumple");
}else{
    console.log("no se cumple");
}
let falso = false;
if(falso){
    console.log("se cumple");
}else{
    console.log("no se cumple");
}
