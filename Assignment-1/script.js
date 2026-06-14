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
const page = document.querySelector('body');
const storyBar = document.querySelector('#story-output');//<-----Important<<

// Arrays ********************************^
let subjects = ["Mom", "Dad", "The Dog", "My Teacher"];
let actions = ["sat on", "ate", "danced with", "kissed"];
let descriptions = ["a funny", "a scary", "a goofy", "a slimy"];
let objects = ["goat", "monkey", "cow", "frog"];
let places = ["on the moon", "in my spaguetti", "in my soup", "on the grass"];



subjectBtn.addEventListener("click", function() {
				page.style.backgroundColor = "red";
			});