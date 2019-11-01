//var let const
//Data types 
var string = 'string';
var string2 = "string2";
var string3 = 'this is fun y\'all'
// var string3 = "this is fun y'all"
var string4 = "Bryce said coding is \"cool\""
// var string4 = 'Bryce said coding is "cool"'

var int = 1;
var int2 = 1.0;
var int3 = 1.345;

//boolean

var bool = false;
var bool1 = true;

var bool2 = !false;
var array1 = [];
console.log('array length: ' ,array1.length);

var bool3 = !array1.length; //The array is 0 and 0 is falsey and so not is 0 and opposite of 0/falsey is true.
console.log('bool3: ',bool3)


//truthy/falsy
// all these are false
var highScore = false;
var highScore2 = 0;
var highScore3 = '';
var highScore4 = 10/'score';//NaN
var highScore5; //undefined / NULL




// `use strict` will not make a variable when no estactiated

var foo = 'bar';
let baz = 'foo';
const bar = 'baz'; // immutable = cannot change
const arrayConst = [1,2]
arrayConst.push(3);
console.log(arrayConst);// this can be change inside a array because they are data containers

objConst = { //did not work bc array is immutable only can add on to an array.
    name: 'Bryce'
}

objConst.last = "Mullican";
console.log(objConst);

{ // block if only {} it means it is inside a block
    let foo2 = 'bar';
    var bar2 = 'foo'+ foo2;
}

console.log(bar2);

var result = 0; // doesn't matter if it is out or inside the block;
let num1 = 6; // doesn't break code and its global scope but doesn't break the block under it.


{
    let num1 = 2;
    let num2 = 4;
    result = num1 + num2;

}

console.log(result)


//array

var array = [1,2,3];
console.log(array);
console.log('array[1]', array[1]);
console.log(array.length);

console.log('first: ', array[0]);
console.log('last:', array[array.length - 1]);

var count = array.push(4,5);
console.log('count', count, array);

var pop = array.pop();
console.log('pop', pop, array);

//obj

var obj = {
    key: "value",
    name: 'Bryce',
    email: 'bryce.mullican@nunya.com'
}

console.log(obj['key']);
console.log(obj.key);

var key = 'key';
console.log('key as a variable',obj[key]); //only pass it thought notation through square brackets

var obj1 = {
    sum : sum,
    cost: 1.99,
    tax: 1.22,
    total: function (num1, num2) { // an anonymous function because it has no name
        return num1 + num2;
    }
}

var array2 = [1,2,sum, function (num1, num2) {
    return num1 + num2;
 }] //if [1,2,sum()]it will show up a NaN

var result2 = array2[2](1,2); //Invoke a function just put () with function name before it.
console.log(result2)

var result3 = array2[3];
console.log(result3); // will show just the function structure if invoke it(with numbers)it would

var resultSum = obj1.sum(obj1.cost ,obj1.tax);
console.log(resultSum);


//conditionals
// var condition  = true;
var condition = 5; //'5'can = to interger 5.
if (condition) { // true
    //do stuff
    console.log('true')
    console.log(true)
}

//== , <,>, >=,<=, ||(or), &&
if (condition < 10 && condition > 4) {
    console.log(true)
}

if ('A' < 'b') {
    console.log('let\'s find out')
}

//loops
//functions
  function sum(num1, num2) {
    return num1 + num2
}

//New material
//D.O.M.
//events