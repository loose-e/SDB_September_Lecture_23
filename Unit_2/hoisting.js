/* 
    ! hoisting
    JS reads from top to bottom in different passes.
        1st pass 
            - made by the compiler. This is where hoisting is initiated
            - compiled for execution
        2nd pass
            - variables are assigned
            - executes and hoisted code
*/

let names = 'Fred';
console.log(names);

b();

function b() {
    console.log('I have been hoisted!');
}

// c();

let c = () => {
    console.log('Hoisted?');
}

c();

