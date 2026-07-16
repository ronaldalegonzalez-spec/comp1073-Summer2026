const output = document.getElementById('output');

/* STEP 1a: Create a new object using a regular function */
function createNewCar(make, model, color){
    let obj = {};
    obj.model = model;
    obj.make = make;
    obj.color = color;
    return obj;
}

/* STEP 1b: Use the console to create a new album object, and then invoke the function represented using .describe() */
let mar1 = createNewCar("Honda", "Civic", "Red");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - rewrite the above function, without returning anything. Capitalize the name of the function. */
function Car(make, model, color){
    this.model = model;
    this.make = make;
    this.color = color;
    this.description = function(){
        return `A ${this.make} ${this.model} with ${this.color} color.`;
    }
}

/* STEP 2b: Use the console to create a couple of different albums, using the 'new' keyword, and again invoking the .describe() method for each one */
let car2 = new Car("Honda", "CRV", "White");

output.textContent = car2.description();
/* STEP 3a: Build the complete constructor for the object Album (comment out the above functions first). Include album name, artist, year, number of tracks, and description (function). */



/* STEP 3b: Instantiate a new Album (or 2) based on the above constructor */


/* STEP 3c: Attempt to access the various properties of album2 or album3 using the console. */
// album2['name']
// album2['artist']
// album2.numTracks
// album2.year
/* STEP 3d: Invoke a method belonging to one of the album objects */
// album2.describe()
// album3.describe()

/* STEP 4a: Modify the describe method of the above Album constructor so that it returns a string. */
let car3 = new Object();
/* STEP 4b: Capture the description of one of the album objects and set it as the text for the paragraph on the page (see line 1 of this script). */
car3.model = "1500";
car3.make = "RAM";
car3.color = "Green";

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let car4 = Object.create(car2);
car4.color = "Purple";
/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to the Lab...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
