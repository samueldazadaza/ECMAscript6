//CLASE2
// antes de es6

function newFunction(name, AbstractRange, edad) {
    var name = name || 'oscar';
    var age =age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age =32, country = "MX") {
    console.log(name, age, country)
}
newFunction2();
newFunction2('Ricardo', '23', 'CO')

//union antes
let hello = "hello";
let world = "world";
let epicphrase = hello + ' ' + world;
console.log(epicphrase);

//union ahora es6
let epicphrase2 = `${hello} ${world} 22`;
console.log(epicphrase2);

// CLASE3
//-- variable string LET y CONST
let lorem = "primera frase super epica de celismx \n" +
"otra(segunda) frase epica que necesitamos."

let lorem2 = `tercera frase que necesitamos
ahora es la cuarta frase epica`;

console.log(lorem);
console.log(lorem2)

// destructuración
let person = {
    'name' : 'oscar' ,
    'age' : 32,
    'country' : 'MX',
}
console.log(person.name, person.age);

//despues con es6
let { name, age } = person;
console.log(name, age);

//operador de propagación

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

let education = ['david', ...team1, ...team2];

console.log(education);


//LET
{
    var globalVar = "global var";
}

{
    let globalLet = 'global let';
    console.log(globalLet)
}

console.log(globalVar);

//CONST //para evitar reasignar valor a variable
const a = 'b';
a = 'a';
console.log(a);

//CLASE4
//Arrow Functions, Promesas y Parámetros en objetos

let name = 'OSCAR';
let age = 32;

//es5
obj = { name : name, age : age};
//es6
obj2 = { name, age };
console.log(obj2);

//arrow function o funciones tipo flecha

const names = [
    {name: 'Oscar', age: 32}
    {name:'Yesica', age: 27}
]
//antes
let listOfNames = names.map(function (item) {
    console.log(item.name)
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    .......;
}

const listOfNames4 = name => {
    .......;
}

const square = num => num * num; //esto genera return auto sin poner return

//PROMESAS solución para el asincronismo (algo va a pasar)
//para hacer peticiones a una API (sincronismo)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//CLASE 5
//Clases, Módulos y Generadores

//clases y herencaia js
class calculator {
    constructor() { 
        this.valuaA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {//esto es parte es un metodo
        this.valuaA = valueA;
        this.valueB = valueB;
        return this.valuaA + this.valueB;
    } 
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//import y export -- MODULOS
import { hello } From './module';

hello() //para llamar el modulo

//GENERATORS -- retorna una serie de valores segun algoritmo definido..... ej: caso fibonassi

function* helloWorld() {
    if(true) {
        yield 'Hello, ' 
    }
    if(true) {
        yield 'world'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


//CLASE 6
//