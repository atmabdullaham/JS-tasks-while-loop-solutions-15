// Problem 15: Write a while loop to find the GCD of two positive integers using the Euclidean algorithm.
// For example, if the inputs are 48 and 18, the output should be 6.

let a = 48;
let b = 18;
while (b !== 0) {
 let temp = b;
 b = a % b;
 a = temp;
}
console.log(a); // Output: 6
