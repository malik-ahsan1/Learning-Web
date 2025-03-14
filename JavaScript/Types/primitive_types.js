// Number
let age = 25;          // Integer
let price = 9.99;      // Decimal
let result = 10 / "a"; // NaN (Not a Number)
let infinity = 1 / 0;  // Infinity

console.log(typeof age);    // "number"
console.log(result);        // NaN
console.log(infinity, '\n');      // Infinity

// String
let name = "Alice";      // Double quotes
let food = 'pizza';      // Single quotes
let greeting = `Hello, ${name}!`; // Template literal (ES6)

console.log(typeof food); // "string"
console.log(greeting, '\n');    // "Hello, Alice!"

// Boolean
let isLogged = true;
let isAdmin = false;

console.log(typeof isLogged); // "boolean"
console.log(10 > 5, '\n');          // true

// Null
let car = null; // Explicitly assigned "no value"

console.log(car);        // null
console.log(typeof car, '\n'); // "object" (historical bug!)

// Undefined
let x; // Declared but not assigned
console.log(x);        // undefined
console.log(typeof x, '\n'); // "undefined"

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1);
console.log(id2);
console.log(id1 === id2); // false (Symbols are unique)
console.log(typeof id1, '\n');  // "symbol"

// Bigint
const bigNumber = 1234567890123456789012345678901234567890n; // Append 'n'
const regularNumber = 123;

console.log(bigNumber);      // 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // "bigint"
// console.log(bigNumber + regularNumber); // Error: mix BigInt and other types