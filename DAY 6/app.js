//Functions - Allows us to write reusable blocks of code.

//Defining a function
function greet() {
    console.log("Hello World!");
    console.log("Hello Philippines!");
}

//Calling a function
greet();
greet();
greet();



//Function with Parameter
function greetMe(name) {
    console.log('Hello, ', name);
}
greetMe('ems'); // Arguments


//Function with return
function sum(a, b) {
    console.log("Log me please.")
    return a + b;
    console.log("Log me again please.") // not appearing 
}
console.log('Sum', sum(5, 8));