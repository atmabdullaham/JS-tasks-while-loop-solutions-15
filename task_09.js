// 8. Write a while loop that prints the Fibonacci sequence up to 50.
let a = 0;
let b = 1;
while (a <= 50) {
 console.log(a);
 let temp = a + b;
 a = b;
 b = temp;
}
