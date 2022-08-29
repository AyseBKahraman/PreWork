//August 11,2022 Day4 Homework
// Here are the functions:
//  1. Define a function, as a function declaration, 
//maxOfTwoNumbersthat takes two numbers as arguments 
//and returns the largest of them. If they are the same,
// return that number. Use the if-else construct or a 
//ternary expression - the Math.max method is not allowed.

//function maxOfTwoNumbers(x, y) {
    //   if (x >= y) {
    //     return x;
    //   } else {
    //     return y;
    //   }
    // }
    // console.log(maxOfTwoNumbers(3,9));

// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. 
//Again, the Math.max method is not allowed.

// const maxOfThreeNumbers = (x, y, z) => {
//     let max = 0;
//     if(x > y && x > z) {
//         return x
//     }
//     else if (y > x && y>z){
//         return y
//     }

//     else {
//         return z
//     }
    
// }
// console.log(maxOfThreeNumbers(11,9,7));

// 3. Define a function, as a function declaration, 
//isCharAVowelthat takes a character as an argument and 
//returns true if it is a vowel, false otherwise.

// const isCharAVowel = (letter) => {
// if (letter === "a" || letter ==="e" || letter ==="i" || letter==="o" || letter=="u" || letter==="y" ) {
//     return true
// }else {
// return false
// }
// }
// console.log(isCharAVowel("a"));
// console.log(isCharAVowel("k"));


// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and 
//returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// function sumArray (array) {
//     var total = 0;
//     for(var i = 0; i < array.length; i++ ){
//         total= total + array[i]
//     }
//     return total;
// }
// console.log(sumArray([1,2,5]));

// 5. Define a function, as a function declaration, multiplyArraythat takes an 
//array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);
//would return 40.

// function multiplyArray (array){
//     var total = 1;
//     for(var i = 0; i < array.length; i++ ){
//         total= total * array[i]
//     }
//     return total;
// } 
// console.log(multiplyArray([2,4,5]));

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments 
//passed to the function when called.
function numArgs(array){
    NewArray = [];
    for(i = 0; i < array.length; i++){
        NewArray.push(array[i].length);
    }
    console.log(NewArray)
}
numArgs(["Mirror", "cat"])

// 7. Define a function, as a function declaration, reverseStringthat 
//takes a string, reverses the characters, and returns it. 
//For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseStringX(string){
//     var reverseString="";
//     for(let i=string.length-1; i>=0 ; i--){
//         reverseString = reverseString + string[i]

//     }
//     return reverseString
// }
//console.log(reverseStringX("rockstar"));

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of 
//strings as an argument and returns the length of the longest string.

// function longestStringInArray(array){
//     var logestString=0
//     for (let i = 0; i < array.length-1; i++){
       
//          if (array[i].length > array[i+1].length ){
//              logestString = array[i].length
//         }
//     }
//     return logestString
// }
//console.log(longestStringInArray(['dog',"apple", "colour",'cat']));

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array 
//of strings and a number as arguments; and returns an array of the strings that are longer 
//than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 
//3);would return ["hello", "morning"].

// function stringsLongerThan (array, x) {
//     var NewArray = []
//     for( let i = 0; i < array.length; i++){
//         if ( array[i].length > x){
//             NewArray.push(array[i]);
//         }
//     }
//     return NewArray
// }
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'],3));