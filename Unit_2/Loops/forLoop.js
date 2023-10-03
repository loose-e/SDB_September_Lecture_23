/* 

    ? Loops

    Loops loop through a block of code a number of times 

    ! if stuck in an accidental infinitely running loop:
        ctrl + c, ctrl + z, red stop button from code runner

    ? For Loops:
        Take in 3 parameters(the things within the ( ) of a statement)
            - initial expression (starting value)
            - condition 
            - increment expression

    Structure:
    for (initial expression ; condition ; increment expression) {
        ...code block of logic to run
    }
*/

// start at 0 and increase to 10
for (i = 0 ; i <= 10 ; i--) {
    console.log(i);
}

console.log('finished for loop');

// start at 0 increase by 2 to 20
for (i = 0 ; i <= 20 ; i += 2) {
    console.log(i);
}

// start at 10 and decrease by 1 to 0
for (i = 10 ; i >= 0 ; i--) {
    console.log(i);
}

// if using a straight return(one item is returning from a statement): we don't need to use curly brackets
for (i = 5 ; i >= 0 ; i--) console.log(i);

// spell out a word letter for letter
let firstName = 'Michael';

console.log(firstName.length)

for (let i = 0 ; i < firstName.length ; i++) {
    console.log(i, firstName[i]);
}

// change the value of a variable with a for loop
let sum = 0;

console.log(`sum equals ${sum} before the for loop.`)

for (let i = 1 ; i <= 5; i++) {
    console.log('before: ', sum);
    sum += i;
    console.log('after: ', sum);
    console.log();
}

console.log(`sum equals ${sum} after the for loop.`)

/* 
    ? for in Loops

    - Loop through the properties of an object

    Structure:
    for ( key in object ) {
        ...code to run
    }

    ^key is a random variable name of choice
*/

let student = {
    name: 'Harry', 
    animal: 'owl', 
    degree: 'magic', 
    boyWhoLived: true,
};

console.log(student.name);
console.log(student['name']);

for (item in student) {
    console.log(item); // log each key name in the 
    console.log(student[item]);
}

// array is considered an object by JS

let catArray = ['tabby', 'maine coon', 'rag doll', 'russian gray'];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

/* 
    For in loops can be used on objects and arrays. 
    But if array index order is important, it's better to use a:
        - for loop
        - for of loop
        - Array.forEach()
*/

/* 
    ? for of loops:

    - loops through the properties of an iterable object
        iterable - an object that has iterable properties(stuff it can count/go through)

    structure:
    for ( variable of iterableData ) {
        ...code to execute/run
    }

    ^variable is any word we choose to use, iterableData is the name of any iterable 'thing'

    can loops over strings, arrays, etc

    ! for of loops don't work with objects, as they aren't iterable 
*/

let dogArray = [
    'husky',
    'shih tzu',
    'corgi',
    'catahoula',
    'shiba',
    'golden retriever'
]

// for ( pupper of dogArray ) {
//     console.log('For of loop: ', pupper);
// }

for ( doggo of dogArray ) {
    // use an if conditional to make a separate console.log
    if (doggo === 'husky') {
        console.log(`I think the ${doggo} is yelling/screaming for his breakfast!`);
    } else if (doggo === 'shiba') {
        console.log(`The ${doggo} is sitting there judging everyone.`);
    } else {
        console.log(`The ${doggo} is sitting there quietly.`);
    }
}