/* const foods = [
    {
        name: 'Beer',
        price: 6.99,
        brand: 'Beer'
    },
    {
        name: 'Pizza',
        price: 2.99,
        brand: 'Totino\'s'
    },
    {
        name: 'Bread',
        price: 8.99,
        brand: 'Ezekiel'
    }
]
const foodOutput = document.getElementById('foods');
for (const idx in foods) {
    const food = foods[idx];
    // CREATE AND ADD ELEMENT TO THE DOM
    let el = document.createElement('li');
    el.classList.add('foo'); // add a class
    el.setAttribute('data-id', idx); // add a data attribute
    el.innerText = `${food.name} - ${food.brand} : $${food.price}`;
    foodOutput.appendChild(el);
    // ---------------------------------
    // ADD AN EVENT LISTENER
    el.addEventListener('click', addToCart);
}
let cart = {}
function addToCart() {
    let item = this.getAttribute('data-id');
    let food = foods[item];
    if (cart[food.name]) {
        cart[food.name].qty++;
    } else {
        cart[food.name] = {
            qty: 1,
            price: food.price
        };
    }
    console.log(cart);
} */

const output = document.getElementById('output');
const button = document.getElementById('submit');


button.addEventListener('click', game);

function game() {
    if (level == 'fur') {
        let fur = handleInput();
        output.innerText = 'Do you want a pet with fur Yes/No' //we do not want this in the global bc of global pollution
        if(fur == 'Yes') {
            level = 'cage'; //this level changes the level so if a answer is the same, it won't execute other conditionals
            //I.e level == 'fur';
            output.innerText = 'Do you want a pet that lives in a cage?';
        } else {
    
        }
        return
    }

    if (level == 'cage') {
        let cage = handleInput();
        if (cage == 'Yes') {
            level = 'vegan';
            output.innerText = 'Do you want a pet that is a vegan?';
        } else {
            output.innerText = 'Do you want a independent pet?  '
        }
    }

}

function handleInput() {
    
    const input = document.getElementById('input'); //If you do not put .value, it will show the inputbox instead of the data put inside.
    let value = input.value.toLowerCase();
    // console.log(input.value);// This is logging out the string and then right after.
    input.value = ''; //it resets the input box with a clear space.
    return value;
}

//neeed to output questions to the page.
//receive a response from input
//need to ask a new question
//need to receive new response 