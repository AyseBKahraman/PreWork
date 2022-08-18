// Week 2 Day 2 Homework 

// 1.
// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
// Constructors
// here is a class to work with

// class Cat{
//     constructor(breed, size, color, birthyear){
//         this.breed = breed
//         this.size = size
//         this.color = color
//         this.birthyear = birthyear
//     }
//     age(x){
//         console.log(2022 - this.birthyear);
//     }
//     cuteness(){
//         if (this.size === 'small' || this.color ==="white" ){
//             console.log ('This cat is very cute')
//         }else {
//             "cuteness is average "
//         }
//     }
//     healthCondition(health){
//         this.condition = health
//     }
// }

// let Cat1 = new Cat ('American Curl','Big', 'white', 2020 )
// let Cat2 = new Cat ('British Short Hair', 'middle', 'black', 2019 )
// let Cat3 = new Cat ('Scittish Fold', 'small', 'yellow', 2021 )

// // console.log(Cat1);
// // Cat1.age()
// // console.log(Cat3);
// // Cat3.cuteness()
// // Cat1.cuteness()
// Cat3.healthCondition("good")
// console.log(Cat3)



// 2.
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(name, age, region){
        this.name = name
        this.age = age
        this.region = region
    }
    message(){
        return "Hello, I am ${this.name}.";
    }
    county(){
        return 'I am in ${this.region}.';
    }
    year(){
        return "I am ${this.age} years old";
    }
}

const Array1 = [
    new Pirate ("Thomas", '45', "South America"),
    new Pirate ("Henry", "50", "Singapore"),
    new Pirate ("Francis", "55", "Nigeria")
];

const Array2 = [
    new Pirate ( "John", "30", "Indian Ocean"),
    new Pirate ("Bill", "65", "Falcon Lake"),
    new Pirate ("Zheng", "60", "Singapore")
];

for (i = 0; i < Array1.length; i++){
    console.log(Array1[i]);
    // console.log(Array1[i].name);
}
for (k = 0; k < Array2.length; k++){
    console.log(Array2[k]);
}


