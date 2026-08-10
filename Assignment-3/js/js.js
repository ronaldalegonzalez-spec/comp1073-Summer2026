// VAriables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const studentInfo = document.getElementById("student");

const pokemonName = document.getElementById("pokemon-name");
const pokemonForm = document.querySelector("form");
const resultsSection = document.getElementById('results');

// Dynamically set Student Information 
studentInfo.textContent = `Ronald Gonzalez #200631594`;

//Calling the fuctions
pokemonForm.addEventListener("submit", fetchPokemon);
pokemonForm.addEventListener("reset", resetAll);

// Function to fetch Pokemon data from the PokeAPI>>>>>>>>>>>>>>>>>>>????
function fetchPokemon(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let name = pokemonName.value;//get the name pokemon's name

    let url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;//add it to the url

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            displayPokemon(json);
        })
        .catch(error => {
            console.error("Error fetching Pokemon data:", error);
        });
}

//Diplay the Pokemon data in the results section
function displayPokemon(json) {

    const card = document.createElement("article");// Create a new article element to hold the Pokemon information

    const heading = document.createElement("h2"); // Create a new h2 element for the Pokemon name
    heading.textContent = json.name.toUpperCase();

    const image = document.createElement("img"); // Create a new img element for the Pokemon image

    image.src = json.sprites.front_default;
    image.alt = json.name + " image";

    // Create a new paragraph element for the Pokemon abilities
    const abilitiesPart = document.createElement("p"); abilitiesPart.id = "headerParagraph";
    abilitiesPart.textContent = "Abilities:";


    // Adding all the info in the Article and then in the Section
    card.classList.add("pokemon-card");
    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(abilitiesPart);

    // Iterate through the Pokemon's array of abilities and create elemnets for each one
    for (i = 0; i < json.abilities.length; i++) {
        const ability = document.createElement("p");

        ability.textContent = json.abilities[i].ability.name;
        card.appendChild(ability);

    }

    //Add the new Article to the Section
    resultsSection.appendChild(card);
}

//Reset everything>>>
function resetAll() {
    while (resultsSection.firstChild) {
        resultsSection.removeChild(resultsSection.firstChild);
    }

}


