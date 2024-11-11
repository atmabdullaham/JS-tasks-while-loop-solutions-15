// 9. Write a while loop that reverses a given string.


let str = "hello";
let reversed = "";
let i = str.length - 1;
while (i >= 0) {
  reversed += str[i];
  i--;
}
console.log(reversed);
