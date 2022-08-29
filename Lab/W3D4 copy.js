// class Hamster{
//     constructor(name){
//         this.owner = " ";
//         this.name = name;
//         this.price = 15
//     }
//     wheelRun(){
//         console.log('squeak squeak')
//     }
//     eatFood(){
//         console.log("nibble nibble")
//     }
//     getPrice(){
//         return this.price
//     }
// }
// const ayse = new Hamster('ayse')
// console.log(ayse)



// class Person {
//     constructor(name){
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hamsters = [];
//         this.bankAccount = 0
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeight(){
//         return this.weight
//     }
//     greet(){
//         console.log(`I am ${this.name} hello`)
//     }
//     eat(){
//         this.weight++
//         this.mood++
//     }
//     exercise(){
//         this.weight--
//     }
//     ageUp(){
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount+=10
//     }
//     buyHamster(hamster){
//         this.hamsters.push(hamster)
//         this.mood+=10
//         this.bankAccount-=ayse.getPrice()
//     }
// }

// function aging(ageNumber){
//     for(i=0; i< ageNumber; i++){
//         person1.ageUp();
//     }
// }
// function eatTime(eatNumber){
//     for(i=0; i< eatNumber; i++){
//         person1.eat();
//     }
// }
// function exTime(exNumber){
//     for(i=0; i< exNumber; i++){
//         person1.exercise();
//     }
// }

// const person1 = new Person('Timmy');
// aging(5);
// console.log(person1);
// eatTime(5);
// console.log(person1);
// exTime(5);
// console.log(person1);
// aging(9)
// console.log(person1);
// person1.buyHamster("Gus");
// console.log(person1);
// aging(15);
// console.log(person1);
// eatTime(2);
// console.log(person1);
// exTime(2);
// console.log(person1);

// Chef Make Dinners
// class Dinner {
//     constructor(x,y,z){
//         this.appetizer = x 
//         this.entree = y
//         this.dessert = z
//     }
// }