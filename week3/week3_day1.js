// WHITEBOARDING PRACTICE CHALLENGES
// COUNTING SUM CHALLENGE
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers.

function countingSum(num1, num2){
    let total = 0;
    for (let i = num1 ; i <= num2; i++){
        total = total + i;
    }
    console.log(total);
    total = 0
}
countingSum(35, 77);
countingSum(1, 100);
countingSum(234, 567);

//PET OBJECT Challenge
//Create a pets object
// The object should contain the following properties:
/*
Animal - string
Name - string
Gender - string
Age - integer
Likes - array
*/

let pet = {
    animal: "West Highland White Terrier",
    name: "Bella",
    gender: "female",
    age: 12,
    likes: ["going on walks", "peanut butter", "laying wherever is most inconvenient", "being around people"]
};


// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// You function should console.log the area of a Trapezoid
// 1/2(b1 + b2)h

function trapezoid(b1, b2, h){
    console.log(.5*h*(b1 + b2));
}
trapezoid(5, 4, 6);