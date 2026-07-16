const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    // variables/fields
    size;
    isDecaf;

    // constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }
    // functions/methods
    // add a serveIt method
    serveIt(){
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>

        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg"); // <img src="images/coffee-cup.svg">

        // Determine caffeine status of the coffees
        if(this.isDecaf){
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        }
        else{
            cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }

        // Set the size of the cup SVG image based on this.size
        switch(this.size){ 
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                cup.setAttribute("height", 100); // <img src="images/coffee-cup.svg" height=100>
                break;
            case "medium":
                cup.setAttribute("height", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                break;
            default:
                cup.setAttribute("height", 150);
        }

        // Generate a description of the coffee and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} Coffee`,);

        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let ronaldCoffee = new Coffee("small", false);
ronaldCoffee.serveIt();

// LAB-2 STARTS HERE----------->

//declare the subclass Espresso
class Espresso extends Coffee{
    //create a new property
    syrup;

    constructor(size, isDecaf, syrup){ //constructor that accepts all properties and uses super()
        super(size, isDecaf);
        this.syrup = syrup;
    }

    //Method that builds and return a description of the coffee with all the properties
    describeDrink(){
        return `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} espresso with ${this.syrup} syrup.`;
    }
}

//created 2 new object from the new subclass Espresso
let mariaEspresso = new Espresso("large", false, "vanilla");
let joseEspresso = new Espresso("medium", true, "hazelnut");

mariaEspresso.serveIt();// call the object with the "serveIt()" method
joseEspresso.serveIt();

let description = document.createElement("p");// Created a new Element to print the description just below the cup-figures

description.textContent = mariaEspresso.describeDrink() + "  |  " + joseEspresso.describeDrink(); // concatenated the orders

output.appendChild(description);//append it to the output