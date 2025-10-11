// JavaScript automatically converts types in certain contexts (often confusing!).

// Implicit
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (number subtraction)
console.log(true + 1); // 2 (true → 1)
console.log("abc" + null); // "nullabc" (null → "null")

// Explicit
console.log(Number("123")); // 123 (string → number)
console.log(String(123)); // "123" (number → string)
console.log(Boolean("")); // false (falsy → false)


// Irrelivent 
let obj = new Date;
console.log(obj instanceof Date);


console.log(0.1 + 0.2);

let arr = [1, 2, 3];
console.log(arr instanceof Object);
