//  de es6

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
