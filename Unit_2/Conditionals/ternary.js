/* 
    Ternary Conditional Statement
    - Super cool syntax
    - A shortcut for writing and if, if/else, or else/if statement
    - (condition) ? true result : false result;
    - Ternaries REQUIRE both true and false results for each condition (like an else catchall)
*/

let num = 6;

// Ternary:

(num > 0) ? console.log('yes') : console.log('nope');

// instead of 

if (num > 0) {
    console.log('yaya');
} else {
    console.log('nada');
}

// Ternary with two conditions vs if else statement

let x = 0;

// Else if statement

if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary

(x == 0) ? console.log('hello') : (x < 0) ? console.log('hi') : console.log('goodbye');

(x == 0) ? console.log('hello 2') 
    : (x < 0) ? console.log('hi 2') 
    : console.log('goodbye 2');