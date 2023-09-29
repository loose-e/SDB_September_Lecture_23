/* 
    Switch Conditional Statement
    - A switch statement runs a block of code depending on different cases.
    - The switch is used together with a break or a default keyword or both
        - These are both optional
        - Break: keyword that breaks out of the switch block
        - Default: keyword specifies code to run if no case matches (like else)
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // string interpolation
}

// We can use backticks ` ` to create strings that can use the value of variables
// The variable must be surrounded by $( ), cash money curly bois

// let num = -40; // did not work
// let num = 5
let num = -8;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
}