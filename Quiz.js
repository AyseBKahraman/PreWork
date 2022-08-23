/* A. Q + 
1.How do we assign a value to a variable?
By using "=" operator
2.How do we change the value of a variable?
by typing the new value to the variable
How do we assign an existing variable to a new variable?
By simply using "=" operator to give a new value
Remind me, what are declare, assign, and define?
Declare: creating a variable
Assign: using = operator
define:
What is pseudocoding and why should you do it?
It is a written code by human language instead of in a programming language
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
We just need to type instead of thinking a lot of time
*/

/* B. Strings*/
// let firstVariable = "Hello World";
// firstVariable = 3;
// var secondVariable;
// firstVariable = secondVariable;
// secondVariable = "cat"
/*firstvariable = cat */
// let yourName = "ayse"
// console.log("Hello, my name is ");

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// let animal = "cow";
// if (animal === "cow") {
//   console.log("mooo")
// }


// let age = 45;
// if ( age <= 16){
//     console.log( "You are too young" )
// }else {
//     console.log( "you are old")
// }


// let animal = "people";
// if (animal === "cow") {
//   console.log("mooo")
// } else{
//     console.log("You are not a cow")
// }


// let age = 45;
// if ( age <= 16){
//     console.log( "You are too young" )
// }else {
//     console.log( "you are old")
// }

// for(let i =0 ; i <=10; i++ ){
//     console.log(i)
// }

// for(let i =10 ; i <=400; i++ ){
//     console.log(i)
// }

// for(let i =12 ; i <=400; i++ ){
//     if(i % 3 ==0){
//     console.log(i)
//     }
// }

// for (let i = 1; i<=100; i++ ){
//     if( i % 2 ==0){
//         console.log([i] + " " + "even number" )
//     }else{
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 100; i++){
//     if ( i % 15 === 0){
//     console.log("I found a" + i + "there is a crowd high five")
//     } else if( i % 5 ===0){
//     console.log("i found a" + i + ".high five")
//     }else if(i % 3 === 0){
//         console.log("I found a" + i + "there is a crowd")
    
//     }
// }

// bank_account = 0;
// for( let i = 1; i<= 10; i++){
//     bank_account = bank_account + i 
// }
// console.log(bank_account);

// bonus = 0;
// for( let i = 1; i<= 100; i++){
//     bonus = bonus+ i 
// }
// console.log(bonus*2);


// let quotes = ["apple", "banana","strawberry"]

// const randomThings = [1, 10, "hello", true];
// randomThings[2] = " world";
// console.log(randomThings);

// D.Change values:
// 1.
// const ourClass = ["Salty", "Zoom","Sardine","Slack", "Github"];
// console.log(ourClass[2]);
// 2.
// ourClass[4] = "Octocat";
// console.log(ourClass);
// 3.
// ourClass[5] = "Cloud City"
// console.log(ourClass);


// E. Mix It Up
// const myArray = [5, 10, 500, 20];
// // 1.
// myArray.push("Aegon");
// // 2.
// myArray.shift();

// // 3.
// myArray.unshift("Bob Marley");

// // 4.
// myArray.pop();
// // console.log(myArray);
// // 5.
// console.log(myArray.reverse());

// F.Biggie Smalls
// 1.
//  let x = 10;
// // if(x<100){
// //     console.log("little number")
// // }
// // 2.
// if(x>=100){
//     console.log("big number")
// }

// G. Monkey in the  Middle
// let y = 7;
// if(y < 5){
//     console.log("little number")
// }else if (y > 10){
//     console.log("big number")
// }else {
//     console.log("monkey")
// }

// H. What's in your closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
//   1.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + "today!") 
// 2.
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
// 3.
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
// 4.
// console.log(thomsCloset[0][0], thomsCloset[1][0],thomsCloset[2][0]);
// console.log(thomsCloset[0][0]);
// 5.
// console.log(thomsCloset[1][0]);
// 6.
// console.log(thomsCloset[2][1]);
// 7.
// console.log("Tom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] +  " and " + thomsCloset[2][0]);
// 8.
// thomsCloset[2][3] = "Footie Pajamas";
// console.log(thomsCloset[2][3]);

// IV. Functions
// B. printCool
// const printCool = (name) => { 
//     return console.log(name + " is cool")
// }
// printCool("ayse");

// C. calculateCube
// const calculateCube = (number) => {
//     console.log(number*number*number)
// }
// calculateCube(5);

// D. isVovel
// const isVovel = (letter) => {
//     if( letter === "a" || letter ==="e" || letter ==="i" || letter ==="o"||letter === "u") {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isVovel("i"));

// // E. getTwoLengths
// const getTwoLengths = (string, string2) => {
//         console.log([string.length , string2.length])
//     }
//     getTwoLengths("Mirror", "cat")

// // F. get MultipleLengths
// function getMultipleLengths(array){
//         NewArray = [];
//         for(i = 0; i < array.length; i++){
//             NewArray.push(array[i].length);
//         }
//         console.log(NewArray)
//     }
//     getMultipleLengths(["Mirror", "cat"])

// G. maxOfThree
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

    // H. printLongestword
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

        // Objects
        // // A. Make a user object
        var user = {
            name: "ayse",
            email: "balia@gmail.com",
            age : 60,
            purchased: []
        }
        // B. Update the user
        // 1.
        // user.email = " ayse@gmail.com"
        // console.log(user.email);
        // // 2.
        //  user.age++;
        //  console.log(user.age);
        
        // // C. Addaing keys and values
        // user.location = "boston";
        // console.log(user);

        // // D. Shopaholic
        // // 1.
        // user.purchased.push("carbohydrates");
        // console.log(user);
        // // 2.
        // user.purchased.push("piece of mind");
        // console.log(user);
        // // 3.
        // user.purchased.push("Merino jodhpurs");
        // console.log(user);
        // // 4.
        // console.log(user.purchased[2]);

        // // E. Object-within-object
        // // 1.
        // user.friend = {
        //     name: "Grace Hopper",
        //     age: 85,
        //     location: "newyork",
        //     purchased: []
        // }
        // 2.
        // console.log(user.friend.name);
        // // 3.
        // console.log(user.friend.location);
        // // 4.
        // user.friend.age = 55;
        // console.log(user.friend.age)
        // // 5.
        // user.friend.purchased.push("the one ring")
        // console.log(user.friend);
        // // 6.
        // user.friend.purchased.push("a latte")
        // console.log(user.friend);
        // // 7.
        // console.log(user.friend.purchased[1]);

        // // F.Loops
        // // 1.
        // for ( i = 0; i< user.purchased.length-1; i++ ){
        //     console.log(user.purchased[i])
        // }
        // // 2.
        // for ( k = 0; k< user.friend.purchased.length-1; k++ ){
        //     console.log(user.friend.purchased[k])
        // }

        // G. Functions can operate on objects
        // 1.
        // const updateUser = () => {
        //     user.age++;
        //     console.log(user.age);
        //     user.name = user.name.toUpperCase();
        //     console.log(user.name);
        // }
        // console.log(updateUser());
        // console.log(user);

        // 2.
        const oldAndLoud = (person) => {
            person.age++;
            person.name = person.name.toUpperCase();
            return person;
        }

       console.log(oldAndLoud(user)) ;