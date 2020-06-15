var fb = 15;

if (fb % 15 === 0){
    console.log("Fizz Buzz");
} else if (fb % 3 === 0){
    console.log("Fizz");
} else if (fb % 5 === 0){
    console.log("Buzz");
} else {
}

//as a ternary
var fb = 12;
fb % 15 === 0 ? console.log("Fizz Buzz") : 
fb % 3 === 0 ? console.log("Fizz") :
fb % 5 === 0 ? console.log("Buzz") : console.log();

//switch statement
var fb = 12;
switch(true){
    case fb % 15 === 0:
        console.log("Fizz Buzz");
        break;
    case fb % 3 === 0:
        console.log("Fizz");
        break;
    case fb % 5 === 0: 
        console.log("Buzz");
        break;
    default: 
        console.log();
        break;
                }


//// control + D to change more than one thing at once


///OPTIONAL CHALLENGE ONE!
var a = 12;
var b = 7;

if (a % 7 === 0){
    console.log(`value of ${a} is divisable by value of ${b}`);
} else {
    console.log(a % b);
}

//into a ternary
a % 7 === 0 ? console.log(`value of ${a} is divisable by value of ${b}`) : console.log(a % b);
        
//into a switch
switch(true){
    case a % 7 === 0:
        console.log(`value of ${a} is divisable by value of ${b}`);
        break;
    default:
        console.log(a % b);
        break;
     
}

//OPTIONAL CHALLENGE #2
var myString = "ali";

if (myString.length == 0){
    console.log("Please type something!");
} else if (myString.length > 10) {
    console.log("Please type less");
} else {
    console.log(myString);
}
