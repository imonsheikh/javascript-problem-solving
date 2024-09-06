/**
 * 
### 4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
 */


let var1 = [1, 2, 3, 4];
let var2 = "hello";
let var3 = 343;
let var4 = {key: "value"};
let var5 = ['apple', 'banna', 'orange']

let isArrayVar1 = Array.isArray(var1);
let isArrayVar2 = Array.isArray(var2);
let isArrayVar3 = Array.isArray(var3);
let isArrayVar4 = Array.isArray(var4);
let isArrayVar5 = Array.isArray(var5);


console.log("var1 is an array:", isArrayVar1);
console.log("var2 is an array:", isArrayVar2);
console.log("var3 is an array:", isArrayVar3);
console.log("var4 is an array:", isArrayVar4);
console.log("var5 is an array:", isArrayVar5);