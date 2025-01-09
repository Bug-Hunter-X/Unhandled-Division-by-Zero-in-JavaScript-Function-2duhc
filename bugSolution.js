function foo(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error('Division by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(foo(10, 0)); // Returns Infinity
console.log(foo(10, 2)); // Returns 5
console.log(foo(0,2)); // Returns 0