// 10. Write a while loop that finds the largest digit in a given numberS
let num = 7932;
let maxDigit = 0;
while (num > 0) {
 let digit = num % 10;
 if (digit > maxDigit) {
  maxDigit = digit;
 }
 num = Math.floor(num / 10);
}
console.log(maxDigit);