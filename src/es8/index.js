// CLASE 7 
// ¿Qué se implementó en ES8?

//Object Entries (para devolver los valores y claves de una matriz)

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);//para saber cuantos elemntos tiene un objeto

//object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//pading (añade string (val1: tamaño final de string, val2: texto a añadir ))
const string = 'hello';
console.log(string.padStart(7,'hi')); //añadir al inicio de string
console.log(string.padEnd(12, '--------')); //añadir al final del string
console.log('food'.padEnd(12, ' ---------------'))



const obj = {
    name: 'oscar',// triling comas (buenas practicas, poner coma(,) al final del elemento dentro de un objeto)
}