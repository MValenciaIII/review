var arr = [1,2,3,4] 

console.log(arr[0]); // We do not want to manually access arrays if they are 1000 number long. 
// that is why we use loops to make it easier.

/* RUN EITHER THE FOR LOOP OR FOR EACH NOT BOTH THEY ARE THE SAME VAR */


// for (let i = 0; i < arr.length; i++) { // This for loop is the most simple loop. 
//     //This for loop is looping through the variable 'arr' 1 by 1 until 4 < 4 because 4 isn't less than 4.
//     //This loop will always loop until its condition has been met.
//     const element = arr[i];
//     debugger //Shows the code in the browser one step at a time and how it is working.
// }




// arr.forEach(function (el) {
//     console.log(el);
//     debugger
//     //do stuff
// })

// arr.forEach(el => { //This can be done in a arrow function as well.
//     //The foreach runs through the whole data no matter what the condition is. 
//     //foreach loop REQUIRE a function for it to work.
//     console.log(el);
//     debugger
//     //do stuff
// });

/* ------------------------------------------------------------------------- */


//callback refers to a function. 
//idx refers to Index
//El for element.
// how does the user interact with the data????
//IDX can be used to grab value from HTML

// let food = ['pizza','bread','butter','milk']
//indexs are very useful. You could store all the information in Javascript and not crowd the li with so many 'data-'
//as shown above

arr.forEach((el, idx) => {
    console.log(idx, el);
    //do stuff for example for IDX\
    //(this is create element on the HTML document)
    // create the el 
    //append el the page 
    //attach an event listener to el
    
});



/* 
    <li><a data-idx="0" href="">pizza</a></li>
    <li><a data-idx="1" href="">bread</a></li>
    <li><a data-idx="2" href="">butter</a></li>
    <li><a data-idx="3" href="">milk</a></li>
*/

/* -------------------------------------------------------------------------------- */
//WHILE


//Usually while loops are used for behavioral conditions
//Like pop ups on a website showing terms of service every 5 minutes
// while has the potential to not run at all.

//--- UNCOMMENT UNDER ME ---

// let hello = true;
// let goodbye = false;
//while loop will always run until while isn't true. 
// while (hello) { 
//     if (goodbye) {
//         hello = false;
//     }
//     //do stuff
//     goodbye = true;
//     console.log('here')
// }

//---UNCOMMENT OVER ME----

//That is while Console.log('here') will run twice.


/* ------------------------------------------------------------------------------------ */
//DO WHILE


// let hello = true;
// let goodbye = false;
// do { // it will do whats in the curly brackets and then check 
//     // to see if while will run. THIS will RUN at least ONCE.

//     if (goodbye) {
//         hello = false;
//     }
//     //do stuff
//     goodbye = true;
//     console.log('here')

// } while (hello);

/* ------------------------------------------------------------------------------------ */
    //FOR.. IN

const person = {
    name: 'Bryce',
    age: 42,
    address: {
        street: '123 Sesame Street',
        city: 'Jackson',
        state:'MS',
        zip: 39211
    }
}

// for (const key in object) { //ONLY WAY TO PASS A VARIABLE INTO AN OBJECT IS BRACKET NOTATION
//     if (object.hasOwnProperty(key)) { //Just making sure the object has a key. EX. Does this object has a key of 'name:';
//         const element = object[key];
//         console.log(key, element);
//     }
// }

for (const key in person) { //This for..in loop will loop through variable = person.
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(key, value);
        //how can I get street??
        //Log street?
        if (key == 'address') { //While running once key(object variables) is equal to address. This will make 
            //this condition true.
            let address = value; //value is the while for..in loop.
            console.log(address.street) //grabbing the address using dot.notation
        }
    }
}

/* ----------------------------------------------------------------------------------- */

//for..of

let food = ['pizza','bread','butter','milk']

// for (const value of food) {
//     console.log(el);
// }




let string = 'hello'; //for..of can take each letter of a string 1 by 1 shown below.
for (const letter of string) {
     console.log(letter);
}

/* -------------------------------------------------------------------------------------------- */

//BREAK, CONTINUE

// for (const key in food) { //break is like a return button in a function.
//     //It stops the loop from running anymore. 
//     //This example stops at 0 because key was equal to one.
//         if (key == 1) {
//             break;
//         }
//         console.log(key);
// }


//CONTINUE
for (const key in food) { //for..in will give you the index or key.
    
    if (key == 1) {
     continue; //continue will not show at IDX 1 and keep going.
        
    }
    console.log('key',key); //0,2,3
}

// for (const value of object) {
//     //for..of will give you the value
    
// }


/*  ----------------------------------------------------------------------------------------- */

//Word counter

//let vowels = ['a','e','i','o','u'];


let inputWord = document.getElementById('textBox');
var showText = document.getElementById('show');
enterWord = ''


function newLines(text) {
    let dom = document.createElement('p');
    showText.appendChild(dom);
    dom.innerText += text
}


let letterArray = {
    vowels: 0,
    consants: 0
}
function wordCounter() {
    inputWord.addEventListener('blur',event => {
        enterWord = inputWord.value
//.includes is internally loops and checks an array 
        for (const letter of enterWord) {
            
            if (letter == 'a'||letter == 'e'||letter == 'i'||letter == 'o'||letter == 'u') {
                // stores how many vowels are in here 
                //count up the vowels everytime one of these letters show
                letterArray.vowels += 1;
                if (letterArray[letter] = 1) {
                    letterArray[letter]++
                }
            } else {
               //stores how many consonants are in here
               letterArray.consants += 1
               if (letterArray[letter] = 1) {
                letterArray[letter]++
            }
            }
            
        }
        console.log(letterArray)
        newLines(enterWord)
    });
}
wordCounter();
