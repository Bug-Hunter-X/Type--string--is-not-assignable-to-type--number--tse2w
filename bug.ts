function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3

//Type Error
console.log(add(2, "3"));