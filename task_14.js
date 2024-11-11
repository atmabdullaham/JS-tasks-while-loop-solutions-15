// Problem 14: Write a while loop to check if a given positive integer is a prime number.
// A prime number is greater than 1 and has no divisors other than 1 and itself.
// For example, if the input is 17, the output should be true. If the input is 18, the output should be false.

let num = 17;
let isPrime = num > 1; // Assume it's prime if num > 1
let i = 2;
while (i <= Math.sqrt(num)) {
 if (num % i === 0) {
  isPrime = false;
  break;
 }
 i++;
}
console.log(isPrime); // Output: true
