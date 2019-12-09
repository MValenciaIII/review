//functions

function helloWorld() {
    console.log("Hello World")
}

helloWorld();


// function heyYall(num) {
//     console.log('Hey Y\'all',)
// }

//heyYall(); this will still console log even without a parameter.


// var name = 'Bruce'
// function heyYall(name) {
//     console.log('Hey ', + name);
// }

// heyYall(); //Will run but say 'Hey undefined' 


function heyYall(name) {
    name = 'Bruce'
    console.log('Hey ', + name);
}

heyYall(); //Will run and say 'Hey Bruce' If name = bruce is inside the function but not outside the function.

// function addition(num) {
//     let result = num + 2;
//     console.log(result);
//     return result;
// }

// addition('Hello'); // This will show 'hello2' bc strings with concatenates

function addition(num) {
    let result = parseInt(num) + 2; //But if you include parseInt() it will change the string to an integer
    console.log(result);
    return result;
}

addition('2'); // This will show 4 bc parseInt will change it to a integer



function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(result);
    return result;
}

multiply(5); //This will give you a NaN (Not a Number) bc this isnt giving every parameter a number.


function multiply(num1, num2 = 7) {
    let result = num1 * num2;
    console.log(result);
    return result; //Return breaks the code under it after all the requirements in the function has been met. Anything under it will not run.
}

multiply(5); //This will give you a 35 because you are setting a default value to num 2 to 7. You are still able to put a second number but if blank if will go back to its default at 7.


function layers(a, b) {
    let test1 = multiply(a, b);
    let test2 = addition(test1);
    console.log(test2);
    return test2;
}

layers(6, 5);

layers(); //If left blank it will grab the default values from multiply which is 6 and 7. and will show 44. 


const subtractFrom100 = (num)=> { //arrow function, same as a regular function it is a arrow and no function keyword.
    //do stuff
    let result = 100 - num;
    console.log(result);
    return result;
}

subtractFrom100(78);

hello('world'); // did not work.
name('bryce') //worked

function hello(name = 'Bryce') {
    // Regular  functions can be called from anywhere. Javascript uses hoisting to bring it up automatically.
    //do stuff
    console.log(name);
}

const hello = function (params) { //functional expression. 
    //Cannot be called from anywhere, it needs to be called from under it. 
    //do stuff
}

function hola() {
    foo = 'Hello';
    let bar = 'World';

    return `${foo} ${bar}`; //Template literals Allows you to call variables without all the +'s
}

// return 'The population of ' + city + 'is' + pop + 'and';
// return `The population of ${city} is ${pop} and`; Template literals


function Hotel(name, rooms, booked) { //Always captilize first letter only with Object Constructor.
    //Object contructor internally creates a object.
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
}

var quayHotel = new Hotel('Quay', 40, 25); //New Hotel we are setting a new Object Data. This is used for Object Constructors
console.log(quayHotel.checkAvailability());
/* ---------------------------------------------------- */