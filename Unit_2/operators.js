/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

        Expressions & Statement

        keyword name (expression) {
            code block that runs
        }
*/

/* 
        Comparison operators
        - JS is helpful and does something called "coercion" when comparing values
            - coercion is the process of converting a value from one type to another
*/

// Equal to ==
// JS assumed we wanted to check if 3 equals 3, this is only checking values

console.log('3' == 3);

// Strict Equal To, ===
// Check if the two values and the two datatypes are equal

console.log(3 === 3);
console.log('3' === 3);

// Not Equal To, !=, only checking values
console.log('3' != 3); // false
console.log('3' != 4); // true

// Strict Not Equal To, !==, compare both datatype and values
console.log(3 !== 3); // false
console.log('3' !== 4); // true
console.log('3' !== 3); // true

// Greater than
3 > 2;

// Less than
4 < 6;

// Greater than or equal to
// ! operator before sign or it will not work

console.log(3 >= 2);

// Less than or equal to

console.log(1 <= 3);

// And, &&
2 && 3;

// Or, ||
2 || 3;

/* 
    Logical Operators
    - Arithmetic operators
*/

// Addition operator
r += 1; // r = r + 1;

// Subtraction operator
r -= 1; // r = r - 1;

// Multiplication operator
r *= 1; // r = r * 1;

// Division operator
r /= 1; // r = r / 1;

// Remainder operator (modulus operator)
r %= 1; // r = r % 1;

// Exponential operator
r **= 1; // r = r ** 1;