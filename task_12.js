// Problem 5: Write a while loop that counts the number of vowels (a, e, i, o, u) in a given string.
// For example, if the input is "javascript", the output should be 3.

let text = "javascript";
let vowels = "aeiou";
let count = 0;
let index = 0;
while (index < text.length) {
 if (vowels.includes(text[index])) {
  count++;
 }
 index++;
}
console.log(count); // Output: 3