/* 
    let hi = () => {
        console.log('hi');
    }

    first we set the fat arrow function. 
    fat arrows are a way to concisely write function expressions
*/

// ! concise body
let hi = () => console.log('hi');

// ! block body
let hello = () => {
    let msg = 'hello';
    console.log(msg);
}

let apples1 = (x) => `There are ${x} apples.`;

let apples2 = (x) => {
    return `There are ${x} apples.`;
}

console.log(apples1(2));
console.log(apples2(3));

let apples3 = x => `There are ${x} apples.`;

let apples4 = (x, y) => `There are ${x+y} apples.`;

let joey = function() {
    return 'hello joey';
}

console.log(joey());

let fname = () => 'fname';

function capitalizeName(name) { 
    return (name[0].toUpperCase() + name.slice(1)); 
}

// let capitalizeName = name => name[0].toUpperCase() + name.slice(1);

const newName = capitalizeName('eric');
console.log(newName);


