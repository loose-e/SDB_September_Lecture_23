/* 
    CONDITIONALS
    - a way for us (as devs) to ask a question and provide a response depending on the condition of what we're asking
    - devs == inventors: we design and ask the question but also determine the answer options
    - conditionals focus on a thing being true or false
    - Evaluates an expression and responds if it is true.
    - Falsy
        - false
        - 0
        - empty strings
        - null
        - undefined
        - NaN (not a number)
*/

// IF conditional statements
let isOn = true;

if (isOn = true) {
    console.log('The light is on in the room');
};

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn) {
    console.log('The light is on, heck yeah!')
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off...')
}

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket')
}

// IF ELSE conditional statement

let temp = 75;

if (temp < 70) {
    console.log('I will grab a sweater')
} else {
    console.log('Oh boy, it is shorts weather')
}

// And, &&, check if both are equal

let username = 'myusername';
let password = '1235';

if (username == 'myusername' && password == '1234') {
    console.log('Welcome user, you are logged in!')
} else {
    console.log('Login error, begone!')
}

// OR, ||, check if one statement is true OR the other

let email = 'myemail@email.com';
let uName = 'coolcat100';

if (email == 'myemail@email.com' || uName == 'coolcat100') {
    console.log('Welcome user!')
} else {
    console.log('login info was incorrect')
}

// NOT !

let rain = false;

if (!rain) {
    console.log('it is a nice sunny say')
}

if (rain != true) {
    console.log('it is a nice sunny say')
}

// let grade = 92; // This grade is passing, good job!
// let grade = 70; // Not quite passing, reach out to the teacher.
let grade = 50; // Needs to be reworked and resubmitted

if (grade >= 75) {
    console.log('This grade is passing, good job!')
} else if (grade >= 69) {
    console.log('Not quite passing, reach out to the teacher.')
} else {
    console.log('Needs to be reworked and resubmitted')
}