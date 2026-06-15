// elements +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+>
//Main Buttons==============================>>>>>>
const subjectBtn = document.querySelector('#subject-btn');
const actionBtn = document.querySelector('#action-btn');
const descriptionBtn = document.querySelector('#description-btn');
const objectBtn = document.querySelector('#object-btn');
const locationBtn = document.querySelector('#location-btn');

// Controls=========================================>>>
const createStory = document.querySelector('#create-story-btn');
const randomStory = document.querySelector('#random-story-btn');
const reset = document.querySelector('#reset-btn');

// Another Factors====================>>>>>>
const storyBar = document.querySelector('#story-output');//<-----Important<<

// Arrays ********************************^
let subjects = ["My Mom", "My Dad", "The Dog", "My Teacher"];
let actions = ["sat on", "ate", "danced with", "kissed"];
let descriptions = ["a funny", "a scary", "a goofy", "a slimy"];
let objects = ["goat", "monkey", "cow", "frog"];
let locations = ["on the moon", "in my spaghetti", "in my soup", "on the grass"];

// Index variables>>>>
let subjectIndex = -1;
let actionIndex = -1;
let descriptionIndex = -1;
let objectIndex = -1;
let locationIndex = -1;

//Callers------------------------------------------------)
subjectBtn.addEventListener("click", subjectSelection);
actionBtn.addEventListener("click", actionSelection);
descriptionBtn.addEventListener("click", descriptionSelection);
objectBtn.addEventListener("click", objectSelection);
locationBtn.addEventListener("click", locationSelection);

createStory.addEventListener('click', function(){
    storyBar.textContent = `${subjects[subjectIndex]} ${actions[actionIndex]} ${descriptions[descriptionIndex]} ${objects[objectIndex]} ${locations[locationIndex]}.`;

});


// Functions +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+>>>>>>>>

//Subjects=====================
function subjectSelection() {
    subjectIndex++;
    if(subjectIndex >= subjects.length){
        subjectIndex = 0;
    }

    subjectBtn.textContent = subjects[subjectIndex];
    subjectBtn.style.backgroundColor = "purple";
}

//Actions=====================
function actionSelection() {
    actionIndex++;
    if(actionIndex >= actions.length){
        actionIndex = 0;
    }

    actionBtn.textContent = actions[actionIndex];
    actionBtn.style.backgroundColor = "lightblue";
}

//Descriptions=====================
function descriptionSelection() {
    descriptionIndex++;
    if(descriptionIndex >= descriptions.length){
        descriptionIndex = 0;
    }

    descriptionBtn.textContent = descriptions[descriptionIndex];
    descriptionBtn.style.backgroundColor = "green";
}

//Objects=====================
function objectSelection() {
    objectIndex++;
    if(objectIndex >= objects.length){
        objectIndex = 0;
    }

    objectBtn.textContent = objects[objectIndex];
    objectBtn.style.backgroundColor = "orange";
}

//Place=====================
function locationSelection() {
    locationIndex++;
    if(locationIndex >= locations.length){
        locationIndex = 0;
    }

    locationBtn.textContent = locations[locationIndex];
    locationBtn.style.backgroundColor = "violet";
}