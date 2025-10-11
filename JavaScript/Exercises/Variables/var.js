var x = 10; // Global variable

function test() {
  var x = 20; // Local variable inside the function
  console.log("Inside function:", x); // 20
}

test();
console.log("Outside function:", x); // 10 (global x is unchanged)

var name_ = "Alice";
console.log(name_); // "Alice"

var name_; // Re-declaration (no assignment)
console.log(name_); // Still "Alice" (value remains)

var array = [1, 2, 3, 4, 5];

for (var index = 0; index < array.length; index++) {
    const element = array[index];
    
    console.log(`Index: ${index}`);
    console.log(`Element: ${element}`);
}