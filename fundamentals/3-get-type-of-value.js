// Write a function that takes a value as argument
// Return the type of the value

function myFunction(a) {
  return typeof a;
}

// Test Cases:
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction('string'));
console.log(myFunction(['array']));