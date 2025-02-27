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

// Functions
// lines/block of codes that tell our device/application to perform
// certain task when called/invoke
// functions are create complicated tasks to run several lines of code in succession
// tehy are also use to prevent repeating lines/blocks of codes that perform
// the same task or function over and over again.

// Function declarations - it defines a function with the specified parameters

/*
    Syntax:
        function functionName(){
            code block (statements)        
        }

        function keyword - used ti define a javascript functions
        functionName - function are named to be able to use later in the code
        function block ({}) - the statements inside of functions and comprose the body of the functions
                                this is where the code to be executed
*/

function printName() {
  console.log("My name is Juan");
}

//called/invoked
printName(); // function declarations/invoker

// Function invocation - the code block and statements inside a function
// is not immediately executed when the function is defined.
// The code block and the statements inside a function is executed when the function is invoke or called.

// Function declarations vs expressions

/*
    Function declaration
    
    - a function can be created through function declaration by using the function keyword
    and adding a function keyword and adding a function name

    -declared functions are not executed immediately. They are 'saved for later use'
    and will be executed later, when they are invoked (called upon).

    Ex:

        declaredFunction() - can be hoisted, as long as the function has been defined
    
*/

greet();

function greet() {
  console.log("Hello");
}

// not hoisted
// console.log(name);

// let name = "Dave";

// Function Expression
/* 
    A function can also stored in a variable. This is
    called function expression.

    AA function expression is an anonymous function assigned
    to the variableFunction

    Anonymous function - a function without a name
*/

let variableFunction = function () {
  console.log("Hello again!");
};

variableFunction();

// Function scoping
/*
    scope is the accessibility (visibility) of teh variables
    within our program

    Javascript variables has 3 types of scope:
    1. local/block scope
    2. global scope
    3. function scope
*/

{
  let localVar = "Scope Sample";
  console.log(localVar);
}

let globalVar = "Global Variable";
console.log(globalVar);

function showNames() {
  // Function Scope Variable
  var functionVAr = "Function Scope";
  const functionConst = "Const";
  let functionLet = "Let";

  //   console.log(functionVAr);
  //   console.log(functionConst);
  //   console.log(functionLet);
}

// Shows an error cause all the variable is out of scope
// console.log(functionVAr);
// console.log(functionConst);
// console.log(functionLet);

showNames();

// Using alert() - it allows us to show small window at the top of the browser
// page to show the information to our users as oppose to console.log() which only shows te message on the console.

alert("WARNING! This is an alert");

function showAlert() {
  alert("Hello");
}

showAlert();

// Using promt() - it allows us to show small window at the top of the browser to gather user input.

let samplePrompt = prompt("Enter your username");
console.log(`Hello your username is ${samplePrompt}`);
