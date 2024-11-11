// Problem 6: Write a while loop that checks if a given positive integer is a palindrome.
// For example, if the input is 121, the output should be true. If the input is 123, the output should be false.

let original = 121;
let num = original;
let reversed = 0;
while (num > 0) {
 let digit = num % 10;
 reversed = reversed * 10 + digit;
 num = Math.floor(num / 10);
}
console.log(reversed === original); // Output: true
