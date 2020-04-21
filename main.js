
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log('chicken')
    } else if (currentNumber % 7 === 0) {
        console.log('monkey')
    } else if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log('ChickenMonkey')
    } else {
        console.log(currentNumber)
    }

}

let bandNumber = 0

const takeNumber = function (bandName) {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
   bandNumber = bandNumber + 1;
   return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    for (let index = 0; index < foods.length; index++) {
        if(foods[index].cooked === false) {
            foods[index].cooked = true;
            cookedFood.push(foods[index]);
        }    
    
    }
    
};

grill();
console.log(cookedFood)

/*function addExcitement () {
    console.log("Hello World!")
}
addExcitement(); */

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1)%3===0) {
            buildMeUp += `${theWordArray[i]}!`
        } else {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i] }` }
        console.log(buildMeUp)
        
        // Print buildMeUp to the console
        
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)


function addExcitement1 (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1)%3===0) {
            buildMeUp += `${theWordArray[i]}${punctuation}`
        } else {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i] }` }
        console.log(buildMeUp)
        
        // Print buildMeUp to the console
        
    }

}

// Invoke the function and pass in the array
addExcitement1(sentence, "?")
