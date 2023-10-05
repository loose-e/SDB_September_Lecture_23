/* 
    ? While Loops

    - while loop, loops through a block of code WHILE a specific condition is true.

    Structure:
    while ( condition ) {
        ...code to run/execute
    }

    the main purpose for while loops is for when the iteration is uncertain
        - for example, we don't know how much content is in the data we are referencing/looping through

*/

let n = 1;

while ( n < 10 ) {
    console.log(`n before addition, start of loop: ${n}`);
    n++;
    console.log(`n after addition, start of loop: ${n}`);
    console.log('---')
}

console.log(`while loop is finished running, final value: ${n}`);

// use a while loop to create and log a string 

let cartMsg = '';
let z = 0; // zero items in cart

while ( z < 5 ) {
    z++;
    cartMsg = `You have ${z} item(s) in your cart`;
    console.log(cartMsg);
}

console.log(`You have ${z} items in your cart, want to checkout now?`);

// create a spider-man storyline with a while loop and an array

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
    ];

let structure = city[0];
console.log(structure);

let pos = 0;
console.log(city[pos]);

console.log("Welcome to the adventures of Spider-Man! Looks like there's a thief on the loose!");

while ( structure != "empty street" ) {
    console.log(`Spider-Man swings from the ${structure} in pursuit of the thief!`);
    pos++;
    structure = city[pos];
    console.log(`Spider-Man lands on the ${structure}!`);
    console.log("------------");
}

console.log(`Spider-Man lands on the ${structure}! He corners and confronts the thief! Spidy saves the day`);

/* 
    ? do while loops
    - also loop through a block of code while a specified condition is true BUT...
    ! loop will run a code block ONCE, BEFORE checking if a condition is true and will keep running will keep running as long as a condition stays true

    structure:
    do {
        code to run/execute
    } while ( condition )
*/

let num = 5;

do {
    console.log(`The num is: ${num}`)
    num++;
} while ( num < 10 );
console.log(`Num final value: ${num}`);


let value = 20;

do {
    value *= 2;
    console.log('do code block is running...                    ...success')
} while ( value > 100 );

console.log(value) // 40

// mock switch a group of accounts from deactivated to active, use a boolean

// declare and initialize an object called accounts
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

// use square bracket notation with the object's property key to get the t/f value
// want a variable that starts at 1, (acct 1, etc) that we can increment

let acctNum = 1;

do {
    // create a log message to prove the account is currently inactive
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`
    );

    // activating message and set acct to true
    console.log("Activating......");
    accounts[`acct${acctNum}`] = true;

    // confirmation message
    console.log(
        `acct${acctNum} is currently active: set to ${accounts[`acct${acctNum}`]}.`
    );

    // after acc is activated(true), add 1 to acctNum variable to move to next acct
    acctNum++;
} while ( accounts[`acct${acctNum}`] == false );

// process complete message
console.log('all accounts are active');
console.table(accounts); // used .table method instead of .log