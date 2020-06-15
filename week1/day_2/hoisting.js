console.log("I'm being read first!", num);  //undefined //1
sayHi();

var num = 12;
console.log("I'm being read last", num) //5

function sayHi() {
    console.log("hi!");  //hi! //2
    var a = "hello";
    console.log(a); //3
    console.log(num); //4
}


// some extra SCOPE notes

let myVar = 1;

function b() {
    console.log("function b", myVar); //2
}

function a() {
    console.log("function a"); //1 
    let myVar = 2;
    b(); 
}

a();

//another try

function a() {
    console.log("function a"); //1

    function b(){
        console.log("function b", myVar); //2
    }
    let myVar = 2;
}
a();
b();             ///this doesn't work because function b is inside of function a and is not global

function a() {
    console.log("function a");
    b();
}
function b(){
    console.log("function b", myVar);
}
let myVar = 2;
a();
b();