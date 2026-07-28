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
    console.log(toppings.value);
    let delivery = document.querySelector('input[name="delivery"]:checked');
    let instructions = document.getElementById("instructions").value;

    //See which toppings were checked ---->>>>
    let selectedToppings = [];

    for (let i = 0; i < toppings.length; i++) {

        if (toppings[i].checked) {
            selectedToppings.push(toppings[i].value);
        }
    }

    //Step 4: Validation
    if (name == "" || email == "" || size == "" || crust == "" || delivery == "") {
        alert("You need to complete all the fields");
        return;
    }

    if(selectedToppings.length == 0){
        selectedToppings.push("No toppings");
    }

    if(instructions == ""){
        instrucions = "No special instructions";
    }

console.log(selectedToppings);

});

//Step 5: Create an Object with the user info (need to use a class, constructor, and a method inside the Object)

//Step 6: Generate my name and student number with JavaScript (footer)
const myName = document.getElementById("studentInfo");
myName.textContent = "Ronald Gonzalez | #200631594";