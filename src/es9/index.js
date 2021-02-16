// CLASE 9
// OPERADOR DE REPOSO (extrae las propiedades de un objeto que aun no se ha construido)
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all); //imprime solo nombre y el resto de elementos los encapsula en {...}

//otro para eliminar elemento
const obj2 = {
    name: 'Oscar',
    age: 32,
    country: 'MX',
};

let { country, ...all } = obj2;
console.log(all); //imprime el resto de elementos los encapsula y elimina country


//PROPIEDADES DE PROPAGACIÓN
//unir varios elementos de objeto a otro objeto
const obj = {
    name: 'Oscar',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1) //tenemos los 3 elemntos unidos

//PROMIS . FINALY
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject (new Error('Test Error'))
    });
};

helloWorld()
    .then(Response => console.log(Response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//REGEX
//agrupar bloques de regex, y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1] //para acceder al primer grupo
const month = match[2]
const day = match[3]

console.log(year, month, day);