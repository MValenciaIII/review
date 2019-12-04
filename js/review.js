//ES6 Revised javascript.
//ALL JAVASCRIPT IS READ TOP TO BOTTOM.
//SO ONE THING WILL HAPPEN AT THE TOP THEN WILL CHANGE LATER AT THE BOTTOM (14-17)

var foo = 'hello';
{
    var faz = 'hola';
    let bar = 'world';
    const yo = 'yoyo';
    console.log(bar);
}
const baz = ' yo';
//baz = 'foo'; cannot do that.
const boo = []

boo.push(1);
console.log(boo);
boo.pop();
console.log(boo);

console.log(faz);
//console.log(yo); // cannot grab the local varible inside the curly brackets


//let is scoped where you have declared it. 'Blocked scope'
//const cannot change its value as well as data-type. But if you have an data container attached to it, you can add value to that data container as well as remove. Const is also 'blocked scoped'

console.log(foo); //hello
//console.log(bar); //not defined

//this keeps us from polluting the global space
{
    let payRate = 18;
    let weeklyPay = payRate * 40;
    let monthlyPay = weeklyPay * 4;
    var yearlyPay = monthlyPay * 12;
}

console.log(yearlyPay);

// {
    
//     let oof = 2;
//     let ood = 5;
//     let doo = 'yoooo';
//     console.log(oof)
//     // let oof, ood, doo = 'oof'
//     console.log();
// }

var hello = 'world';
let world = 'hello';
const helloWorld = 'Hello World!';

{
    console.log(world);
    console.log(hello);

    let foo = helloWorld;
    console.log(foo);
    
}

let fooBar = foo + hello + world;
console.log(fooBar);

//data types
let string = 'string';
let anotherString = "another string";
let intString = '0';
// let escapeChar = 'we can't put a single quote in a string';
let escapeChar = 'we can\'t put a single quote in a string';
// let escapeChar2 = "he  said \"this would work\"";
let escapeChar2 = 'he  said "this would work"';
let int = 0;
let boolean = false;

let arr = []; //array literal
let obj = {}; //object literal

//Gas a year to the academy
//34$ a week
//21 miles per gallon
//13 miles  away 
{
    let gasLastinDays = 7;
    let daysWithoutWeekends = 261;
    let gasAWeekMoney = 34;
    let weeksInYear = 52;
    let distanceMilestoAcademy = 26;
    let milesPerGallon = 21;
    let carTank = 17;


    let totalGas = milesPerGallon * carTank;
    let daysUntilGasGone = totalGas / distanceMilestoAcademy
    console.log(Math.round(daysUntilGasGone))
    let fillUp = daysWithoutWeekends / daysUntilGasGone
    let total = fillUp *gasAWeekMoney;
    console.log(total)
    let daysIFillUp = daysWithoutWeekends / gasLastinDays;
    let totalCost = daysIFillUp * gasAWeekMoney;
    console.log(totalCost)
}


{
    let gasRate = 2.20;
    let milesPerGal = 16;
    let milesToHome = 6.3;
    let tankSize = 13;

    let costOFTank = gasRate * tankSize;
    let totalRoundTrip = milesToHome *2;
    let weekDist = totalRoundTrip * 5;
    let monthDist = weekDist * 4;
}




//Phone bill a year


//<---------------------------------------------------------->

//ARRAYs

