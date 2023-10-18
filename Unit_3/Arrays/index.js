/* 
    Array
        - denoted with square brackets [ ]
        - indices starting at zero
        - using a property called length, we can find the sum of data stored.
*/

let list = ['milk','bread','chicken','coffee'];

console.log(list[2]);
console.log(list.length);

list[0] = 'chocolate milk';
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);

/* 
    using console.log();
        - target 'Bruce'
        - target 'true'
        - use string interpolation, return 'Hello, Nick' and 'Hello, Tony'
*/
console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello, ${avengers[0]}`,`Hello, ${avengers[5][0]}`)


// ! Array methods
// .push()
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza'); // appends argument at the end of the array
console.log('PUSH: ', food);

//splice (position, how many removed, replace with what)
food.splice(1,1,'Tacos');
console.log('SPLICE: ', food);

food.splice(1,0,'Steak');
console.log('SPLICE 2: ', food);

// .pop()
food.pop(); // removes item from the end of the array
console.log('POP: ', food);

// .shift()
food.shift(); // removes item from the start of the array
console.log('SHIFT ', food);

// .unshift(add item, optional);
food.unshift('Hamburger','Salad');
console.log('UNSHIFT ', food);

// .toString()
let rgb = ['red','green','blue'];
console.log(typeof rgb.toString());
console.log(typeof rgb)