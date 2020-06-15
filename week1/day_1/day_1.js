let myName = "Ali";
let friendName = "Bri";

console.log(myName.length);
console.log(friendName.length);
8
if (myName.length > friendName.length){
    console.log(myName + " is longer than my friend's name, " + friendName);
    console.log(friendName + "'s name is shorter than my name by " + (myName.length - friendName.length) + " letters.");
} else if (myName.length == friendName.length) {
    console.log(myName + " is the same length as " + friendName);
    console.log("Both of our names are " + myName.length + " letters long.");
}
else {
    console.log(friendName + "'s name is longer than my name, " + myName);
    console.log(friendName + "'s name is longer than my name by " + (friendName.length - myName.length) + " letters.");
} 


//challenge#2

var drink = {
    variety: "Red Wine",
    cost: 20,
    alcoholic: true,
    recipe: {
        first_step: "crush grapes",
        second_step: "ferment",
        third_step: "bottle and cork",
    }
}
console.log(typeof(drink.cost));

if (typeof(drink.alcoholic) == "boolean" || typeof(drink.alcoholic) == "number" || typeof(drink.alcoholic) == "string" || typeof(drink.alcoholic) == "object") {
    let drinktype = typeof(drink.alcoholic);
    console.log(drinktype);
} else {
    console.log("What are you!?");
}

typeof(drink.variety) == "boolean" || typeof(drink.variety) == "number" || typeof(drink.variety) == "string" || typeof(drink.variety) == "object" 
? console.log(typeof(drink.variety)) : console.log("What are you!?");