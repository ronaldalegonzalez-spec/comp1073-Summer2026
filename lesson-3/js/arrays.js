const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
// let myArray = new Array;

let myArray = ["string", true, 100, [5, "hello"]];
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
myArray[1] = false;
myArray[3][0] = 6;
output.textContent = `the erd element in the Array is ${String(myArray[2])}, which is a ${typeof(myArray[2])}!`;

// You can also change a particular element

myArray[3][1] = true;
console.log(`the 2nd element of the 4th element of the Array is ${myArray[3][1]}, which is a ${typeof(myArray[3][1])}!`);
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = `myArray has ${myArray[3].length} elements inside of it. `;
// In particular, looping through arrays
for (let i = 0; i < myArray.length; i++) {
    //Check to see if element is an array
    if (Array.isArray(myArray[i])){
        for (let j = 0; j < myArray[i].length; j++){
            output.textContent += `${myArray[i][j]}, `;
        }
    }
    else{
        output.textContent += `${myArray[i]}, `;
    }
}
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6 = "Toronto Maple Leafs, Chicago Blackhawks, Detroit Red Wings, Boston Bruins, Montréal Canadiens, New York Rangers";
let orig6Array = orig6.split(", ");
// Output one of the array items
output.textContent = orig6Array[4];
// Output the last element of the array

output.textContent = `The last team in the array is ${orig6Array[orig6Array.length - 1]}.`
output.textContent = `The last team in the array is ${orig6Array.at(-1)}.` //dos formas de hacerlo, con length o con at()

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */

// let orig6String = orig6Array.toString();
let orig6String = orig6Array.join(" / ");

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
// If you would like to capture how many elements are in the array after you have edited it, then…
let numItems = orig6Array.push("Buffalo Sabres", "New York Islanders");

// Removing an item from an array with pop()
let itemRemoved = orig6Array.pop();

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
let removedItem = orig6Array.shift();
numItems = orig6Array.unshift("Winnipeg Jets", "Québec Nordiques");
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
orig6Array.splice(3, 1, "Edmonton Oilers", "Florida Panthers"); // el numero que pongas en el segundo spot es el numero de elementos que quieres eliminar, si pones mas de 1, se eliminan mas de 1 aunque solo anada 1 (una lista de 8 puede pasar a 6 solo por esto), y el tercer numero es el elemento que quieres insertar en ese lugar, si quieres insertar mas de 1, solo ponlos separados por comas despues del tercer numero

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */