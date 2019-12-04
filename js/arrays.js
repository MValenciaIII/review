//Object is use to help seperate specific data for a entity
//arrays is use to list similar values.

//array literal
let arr = [];
let arr2 = [1,2,3,4];
//zero base indeny, start at 0
console.log(arr2[0]); // 1
console.log(arr2[4]); // undefined
//????
let arr3 = [];
arr3[2] = 'hello';
arr3[5] = 'world';
console.log(arr3);
console.log(arr3[0]); // undefined
//Array fill,
let arr4 = new Array(10).fill(0);
console.log(arr4);
console.log(arr2[arr2.length -1]);
// Array Expresstions
let arr5 = [2+3, 5-1, 6*2];
console.log(arr5);
// Multi Deminstons Array
let arr6 = [
    [1,2,3],
    [4,5,6],
];
console.log(arr6[0][0]); //1
//Nested loops: all the arrays in the array will be loged.
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}
// think conveyer belt
for (let i = 0; i < arr6.length; i++) {
    //arr6[0] == [1,2,3]
    for (let j = 0; j < arr6[i].length; j++) {
        // arr6[0][0]
        console.log(arr6[i][j]);
    }
}
console.log('here');
// Objects literaly
let obj = {};
let obj2 = {
    keyString: 'value',
    keyInt: 2,
    keyArr: [1,2,3],
    keyObj: {
        key: 'value'
    }
}
let person ={
    fname: 'Bryan',
    lname: 'Mulluin',
    lang: ['PHP', 'Javascript', 'HTML', 'CSS'],
    address: {
        street:'Sesame Street',
        number: 123
    },
    helloWorld: 'hola numdo',
    'hello world': 'world hello'
}
//dot or bracket notation
console.log(person['fname']);
console.log(person.fname);
console.log(person['lang'][0]);
console.log(person.lang[0]);
console.log(person['address'].street);
console.log(person.address.street);
console.log(person['helloWorld']);
console.log(person['hello world']);
let obj3 = {}
   obj3 [0] = 'hello',
   obj3 [1] = 'world',
   obj3 [2] = 'yo'
   obj3['key'] = 'value';
console.log(obj3);
console.log(obj3[0]);
let obj4 = {
    fname: 'brayn',
    lanme: 'millaion'
}
let name = 'fname';
console.log(obj.name); //undefined
console.log(obj4[name]); // Bryce
//push
let arr10 = [];
arr10.push('cow');
console.log(arr10);
let temp  = arr10.push('cat','dog','snake')
console.log(temp, arr10);
//pop; changing the length of the array and log the last thing in it: Destructive
let temp1 = arr10.pop();
console.log(arr10.length);
console.log(temp1); //log snake


//
