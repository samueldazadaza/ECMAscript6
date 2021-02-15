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

LET NAME = 'OSCAR';
let age = 32;

obj = { name : name, age : age};

obj2 = {}




