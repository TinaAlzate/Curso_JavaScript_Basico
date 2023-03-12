//const constante;
const constante = "Hola soy una constante";
console.log(constante);
// constante = 'Adios'; Esto da un error

var a=1;
console.log(a)
a=4;
console.log(a);


let b = 3;
console.log(b);
b=5;
console.log(b);

//La diferencia diferencia entre let y var es que var afecta a todo el código y let solo al bloque donde este siendo declarada


var variable = "Soy una variable var";

for(var i=0; i<3; i++){
    var variable = "Soy la segunda variable var";
}
console.log(variable);

let variableLet = "Soy una variable let";

for(var i=0; i<3; i++){
    let variableLet = "Soy la segunda variable let";
}
console.log(variableLet);

// Función type of 

var num = 4;

console.log(typeof num)

num = "Soy num";

console.log(typeof num)