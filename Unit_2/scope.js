let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/* 
    variable keywords:
        - const: cannot be reassigned
        - var: scoped to the function the variable is declared in
        - let: scoped to the code block the variable is in
*/

// var
var myVariable = 12;

function varTest() {
    var myVariable = 33;

    console.log(`var - Outside if: ${myVariable}`);
    if (true) {
        var myVariable = 45;
        console.log(`var - Within if: ${myVariable}`);
    }
    console.log(`var - Outside if: ${myVariable}`);
}

varTest();
console.log(`var - Outside of function: ${myVariable}`);

// const