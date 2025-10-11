if (true) {
  let x = 10; // Only exists inside this block
  console.log(x); // 10
}
//   console.log(x); // Error! x is not defined

let name = "Alice";
// let name = "Bob"; // Error! "Identifier 'name' has already been declared"

// With `let`:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i)); // Output: 0, 1, 2
}

// With `var`:
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j)); // Output: 3, 3, 3
}
