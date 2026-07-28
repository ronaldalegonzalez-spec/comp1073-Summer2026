//Step 1: listen "click" event
const pizzaForm = document.querySelector("#pizzaForm");
pizzaForm.addEventListener("submit", function (event) {
    //Step 2: Prevent default
    event.preventDefault();


    //Step 3: Read info from the inputs (read user info/ values)
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let size = document.getElementById("pizzaSize").value;
    let crust = document.getElementById("crustType").value;
    let toppings = document.querySelectorAll(".topping");
    let delivery = document.querySelector('input[name="delivery"]:checked'); //it checks which one is checked
    let instructions = document.getElementById("instructions").value;

    //See which toppings were checked ---->>>>
    let selectedToppings = [];

    for (let i = 0; i < toppings.length; i++) {

        if (toppings[i].checked) {
            selectedToppings.push(toppings[i].value);
        }
    }

    //Step 4: Validation
    if (name == "" || email == "" || size == "" || crust == "" || delivery == null) {
        alert("You need to complete all the fields");
        return;
    }

    if (selectedToppings.length == 0) {
        selectedToppings.push("No toppings");
    }

    if (instructions == "") {
        instructions = "No special instructions";
    }

    //Step 5: Create an Object with the user info (need to use a class, constructor, and a method inside the Object)
    const pizzaOutput = document.querySelector("#pizzaOutput");

    const myPizza = new Pizza(name, email, size, crust, selectedToppings, delivery.value, instructions); //New object<<<

    pizzaOutput.textContent = myPizza.pizzaDescription();

});

// Pizza Classssss =======================
class Pizza {
    // constructor>>>>>>>>>>>
    constructor(name, email, size, crust, selectedToppings, delivery, instructions) {

        this.name = name;
        this.email = email;
        this.size = size;
        this.crust = crust;
        this.selectedToppings = selectedToppings;
        this.delivery = delivery;
        this.instructions = instructions;
    }
    pizzaDescription() { //method that builds and returns a description
        return `Client Name: ${this.name}
        Client Email: ${this.email}
        Pizza Size: ${this.size}
        Pizza Crust: ${this.crust}
        Selected Toppings: ${this.selectedToppings.join(", ")}.
        Shipping method: ${this.delivery}
        Special Instructions: ${this.instructions}`;
    }
}

// =============================================

//Step 6: Generate my name and student number with JavaScript (footer)
const myName = document.getElementById("studentInfo");
myName.textContent = "Ronald Gonzalez | #200631594";