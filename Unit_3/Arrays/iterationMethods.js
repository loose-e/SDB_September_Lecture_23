//! Iteration Methods
/* 
    - Do not destroy the original array
    - take in callback function
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

//! .filter()
// creates a new array filled with elements that pass a test provided by a function.

//* arrow function w/ block body
const filteredFruit = fruits.filter(fruit => {
    console.log('Parameter: ', fruit)
    let result = fruit !== 'mango';
    console.log('Inside Filter: ', result);
    return result;
});

console.log(filteredFruit);

let fruit1 = 'pineapple';
// console.log(fruit1[0]);
// console.log(fruit1.includes('apple'))

//* arrow function w/ concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filteredFruit2);

//* Function Example
function removeMango(fruit) {
    // console.log(fruit);
    let results = fruit !== 'mango';
    // console.log(results);
    return results;
}

const filterFruit3 = fruits.filter(removeMango);
// console.log('Filtered: ', filterFruit3);
// console.log('Original: ', fruits);

// console.log(removeMango('mango'));

/* 
!   Challenge: 
        How do you remove the 5s from the array?
        Store it in a new variable and console.log that variable 
*/
let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function removeFive(num) {
    return num !== 5;
}

const noFives = myNumberArray.filter(removeFive)
console.log(noFives);




//! .forEach()
// calls a function for each element in an array.
let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for (let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);
}

newFoodList.forEach((item, i) => console.log('ForEach: ', item, 'index: ', i));

let moviesList = [
    'Thor: Ragnarok', 
    'LA Confidential', 
    'Se7en', 
    'Okja', 
    'Breakfast at Tiffany\'s'
]

moviesList.forEach(movie => console.log(movie));
// moviesList.push('Taxi Driver');
// moviesList[2] = 'Pinocchio';
moviesList.splice(0,2,'Barbie');
console.log(moviesList);

let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character));

character = 'April';
console.log('Find Again: ', tmnt.find(c => c == character));

character = 'Splinter';
tmnt.find((c,i) => console.log('Index: ', c == character, 'index: ', i));

//! .map() 
// creates a new array from calling a function for every array element
let numArray = [];
let fizzBuzzArray = [];

for (let i = 0; i < 101; i++) numArray.push(i);

numArray.map(x => {
    if (x % 15 === 0) fizzBuzzArray.push(x);
})

console.log(fizzBuzzArray);


/*
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

if (Array.isArray(arr)) {
    revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
}