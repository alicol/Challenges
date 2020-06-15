function fizzBuzz(){for (let i = 0; i <= 100; i++){
    if (i % 15 === 0){
        console.log("Fizz Buzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
}
fizzBuzz();

//converted to ternary
function fizzBuzz(){for (let i = 0; i <= 100; i++){
    i % 15 === 0 ? console.log("Fizz Buzz"): 
    i % 3 === 0 ?  console.log("Fizz"): 
    i % 5 === 0 ? console.log("Buzz") : 
    console.log(i); 
    }
}

fizzBuzz();

//converted to a switch
function fizzBuzz(){for (let i = 0; i <= 100; i++){
    switch(true){
        case  i % 15 === 0:
            console.log("Fizz Buzz");
            break;
        case i % 3 === 0:
            console.log("Fizz");
            break;
        case i % 5 === 0:
            console.log("Buzz");
            break;
        default:
            console.log(i);    
    }
    }
}

fizzBuzz();

//Pies Challenge

let pies = ["apple", "blueberry", "peach", "chocolate peanut butter", 
"cherry", "sugar", "lemon meringue", "chicken pot", "sheperd", "key lime"];

for (let i = 0; i < pies.length; i++){if (i == 0 || i == 1 || i == 2 || i == 4){
    console.log(`${pies[i]} is a great fruit pie!`);
} else {
    console.log(`${pies[i]} pie is not made of fruit, but a good pie nonetheless`);
}};

//silver
let pies = ["apple", "blueberry", "peach", "chocolate peanut butter", 
"cherry", "sugar", "lemon meringue", "chicken pot", "sheperd", "key lime"];

for (flavor in pies){
    flavor == 0 || flavor == 1 || flavor == 2 || flavor == 4 ? console.log(`I love fruit pie, especially ${pies[flavor]}`) :
    console.log(`I don't like fruit in my pie, I like ${pies[flavor]} pie!`);
};


//another version
let pies = ["apple", "blueberry", "peach", "chocolate peanut butter", 
"cherry", "sugar", "lemon meringue", "chicken pot", "sheperd", "key lime"];
for (pie of pies){
    console.log(pie);
    if(pie.includes("apple") || pie.includes("blueberry") || pie.includes("peach") || pie.includes("cherry")){
        console.log(`${pie} is a type of fruit pie!`);
    } else {
        console.log(`${pie} is not a type of fruit pie.`);
    };
};

//gold
let pies = ["apple", "blueberry", "peach", "chocolate peanut butter", 
"cherry", "sugar", "lemon meringue", "chicken pot", "sheperd", "key lime"];

let fruitPies = [];
fruitPies.push(pies[0],pies[1], pies[2], pies[4]);
console.log(fruitPies);


//platinum
let pies = ["apple", "blueberry", "peach", "chocolate peanut butter", 
"cherry", "sugar", "lemon meringue", "chicken pot", "sheperd", "key lime"];
let fruitPies = [];
let fruit = ["apple", "blueberry", "peach", "blackberry", "strawberry", "cherry", "lemon", "lime"];

pies.forEach((p) => {for (let i = 0; i < pies.length; i++){
    if (p.includes(fruit[i])){
        fruitPies.push(p);
    }  
}
}
);
console.log(fruitPies);