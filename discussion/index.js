// Arithmetic Operators
let x = 13;
let y = 5;

let sum = x + y;
console.log("The sum is: " + sum);

let difference = x - y;
console.log(`The difference is: ${difference}`);

let remainder = x % y;
console.log(`The product is: ${remainder}`);

// Assignment Operator (=)
// The assignment operator adds the value of the right operand
// to a variable and assigns the result to the left operand

let assignNum = 8;

// Addition Assignment Operator (+=) - this operator adds the value of the right operand
// to a variable and assigns the result to the variable

assignNum = assignNum + 2;
assignNum += 2;
console.log(`The result of addition assignment operator is: ${assignNum}`);

assignNum -= 3;
console.log(`The result of subtraction assignment operator is: ${assignNum}`);

assignNum *= 10;
console.log(
  `The result of multiplication assignment operator is: ${assignNum}`
);

assignNum /= 2;
console.log(`The result of division assignment operator is: ${assignNum}`);

// Incremnent and Decrement
// operators add or subtract value by 1 and reassign the value of the variable where the increment/decrement
// was applied to

let z = 1;

//  The value of `z` is added by a value of 1 before returning the value and storing it
// in the variable increment
let increment = ++z;
console.log(`The result of pre-increment ${increment}`);

// The value of `z` is returned and stored in the variable increment
// then the value of z is increased by 1
increment = z++;
console.log(`The result of post-increment ${increment}`);

//  Type Coercion - Automatic or implicit conversion of values of one
// data type to another

// Comparison Operators
// Equality operator (==) - First checks wether the operand are equal/have the same content
// if the content is the same it attempt to convert and compare the operands of diffewrent data types
// it will return a boolean value
let juan = "juan";
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == "1");
console.log("juan" == "juan");
console.log("juan" == juan);

// Strictly Equality Operator
// it checks wether the operands are equal/have the same content
// also compares the data types of 2 values
console.log(1 === 1);
console.log(1 === "1");

//  Inequality Operators
console.log(1 != 1);
console.log(1 != 2);

// Strict Inequality Operators
console.log(1 !== 2);

// Relational Operators
// Logigal Operators

let islegalAge = true;
let isRegistered = false;

// && - AND - returns true if all operands are true otherwise it will return false

let allRequirements = islegalAge && isRegistered;
console.log(`The result of logical AND operator is ${allRequirements}`);

// || - OR - returns atleast true if one of the operands are true

let someRequirement = isRegistered || islegalAge;
console.log(`The result of logical OR operator is ${someRequirement}`);
