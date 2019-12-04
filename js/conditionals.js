/* var result = '2' + 3; // would give you 23 BUT
var result2 = ('2' * 1) + 3; // Gives you 5. */
/*
Assignment Operator
=  
-------------------------
Comparison operators
==  Loose 
!= Loose Not Equal
=== Strict  -> Same Data type as well as equal
!== Strict not Equal
< Less than
>Greater than
<= Less than or Equal to
>= Greater than or Equal to
-------------------------
*/
console.log('2 == \'2\'',2 == '2'); //true
console.log('2 === \'2\'',2 === '2'); // false
console.log(2 >= '2'); // True 

/* 
    String multiple comparisons together 
    && -> AND
    || -> OR
*/
    console.log(2 == 2 && 2 === 2);//true
    console.log(2 === 2 && 2 === '2');//false
    console.log(2 === 2 || 2 === '2');//true



//Boolean
var foo = false;
var bar = true;

// NOT !
var baz = !false; //true
var boo = !true; //false

console.log(!(2 === 2)); //false you can use parenthesis or not.
console.log(!(2 === '2')); //true


// TRUTHY / FALSEY
/* 
// 0 == false
'' == false
NaN == false
null == false
undefined == false
false == false
*/

/* ------------------------------------------------------------------------------------------------------------- */

//conditionals
//If the conditional statement isn't true. The block ('{}') will not run.
if (true) {
    //do stuff

}

if (2 == 2) { //true
    console.log('2 == 2', 2 == 2);
}


if (2 == 3) { //false
    console.log('NOOOO!!!!!')
    console.log('2 == 3', 2 == 3);
}

if ('' || 0 || NaN || null || undefined || false) { //WIll not run
    console.log('Not Here!');
}

if ('' || 0 || NaN || null || undefined || false || 'a') { //Will run. 
    console.log('Not Here!');
}

if (true) {
    //do stuff
} else {
    //do other stuff
}

if (5 < 10) {
    console.log("5 < 10", 5 < 10);
} else {
    console.log("Other stuff")
}

if (10 < 10) {
    console.log("do stuff");
} else {
    console.log("10 < 10", 10 < 10)
}


if (true) {
    //do stuff
} else if (true) {
    //do this stuff
} else {
    // do other stuff
}

if (5 < 3) { //false
    //do stuff
    console.log("do stuff")
} else if (5 == 5) { //true
    //do this stuff
     console.log("do this stuff")   
} else { //
    // do other stuff
    console.log("do other stuff")
}

var num = 4;
if ( num< 3) { //false
    //do stuff
    console.log("do stuff")
} else if (num == 5) { //true
    //do this stuff
     console.log("do this stuff")   
} else if (num == 4) { //
    // do other stuff
    console.log("We made it here!")
}

/* Pet Finder:
 --------------------
 |_1.Spider 2.Parrot
 |
 |_3.Snake 4.Fish
 --------------------
 |
 --------------------
 |_5.Hamster 6.Rabbit
 |
 |_7.Dog 8.Cat
 -------------------- */
let answers = '';

 var userChoices = {
    fur: false,
    size: '',
    food: '',
    personality: '',
    // legs = '',
    // underwater = '',
    // feathers = ''
 }

 var pets = {
     fur: {
        dog:true,
        cat:true,
        hamster:true,
        rabbit: true
     },
     size: {
        dog:'medium',
        cat:'medium',
        hamster:'small',
        rabbit: 'small'
     },
     food: {
        hamster:'fruits',
        rabbit: 'vegetable'
     },
     personality: {
         dog: 'compassionate',
         cat: 'independent'
     }
 }

    function petFinder() {
        answers = prompt('Would you like a pet with Fur? Yes/No')
        if (answers == 'Yes') {
            userChoices.fur = true
            console.log(userChoices.fur)
            answers = prompt('Would you like a medium or small sized animal? Medium/Small')
            if (answers == 'Medium') {
                userChoices.size = 'medium'
            }
        } else {

        }
        
    }

    petFinder();

