//CLASE 10
//JUNIO 2019 -- ES10


//ARRAYS
let array = [1,2,3, [1,2,3, [1,2,3]]]; // niveles dentro de arreglo

console.log(array.flat(3)) // devolver una matriz con cualquier matriz aplanada //argumento de flat(1) para acceder niveles

//FLAT MAP
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));

//string start
let hello = '            hello World';
console.log(hello);
console.log(hello.trimStart());

//al final del texto
let hello = 'hello world       vv           ';
console.log(hello);
console.log(hello.trimEnd());

//optional cash binding
try {

} catch {
    error
}

//from entries -- tranformar clave valor en un objeto
//(tranformar arreglo a objeto)
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//objeto de tipo simbolo -- para acceder a una descripción
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);




