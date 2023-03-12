// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8]

for(let i = 0; i < lista.length; i++){

    if(lista[i] === 3){
        continue;
    }
    console.log(lista[i]);
    
    if(lista[i] > 4){ //Una vez declarado un break "modifica el array principal"
        break;
    }
    console.log(lista[i]);
}

//Cuál es el ámbito de un bucle

// con let las variables solo deberian tener alcance dentro de el mismo blucle y no fuera de el
console.log(i)