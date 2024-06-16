// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton1 = document.getElementById('button1');
const speakButton2 = document.getElementById('button2');
const speakButton3 = document.getElementById('button3');
const speakButton4 = document.getElementById('button4');
const speakButton5 = document.getElementById('button5');
const speakButton6 = document.getElementById('button6');

const speakButton7 = document.getElementById('button7');
const resetStory = document.getElementById('button8');

const container = document.getElementById('story');

let part1 = '';
let part2 = '';
let part3 = '';
let part4 = '';
let part5 = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	container.style.display = 'flex';
	button8.style.display = 'block';
	story.textContent = string;
	synth.speak(utterThis);
}

function updateStory() {
	let fullStory = [part1, part2, part3, part4, part5].filter(Boolean).join(' ');
	container.style.display = 'flex';
	story.textContent = fullStory;
}

function getRandomWord(column) {
	return column[Math.floor(Math.random() * column.length)];
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak

function firstWord() {
	const column1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
	part1 = getRandomWord(column1);
	updateStory();
}

function secondWord() {
	const column2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
	part2 = getRandomWord(column2);
	updateStory();
}

function thirdWord() {
	const column3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
	part3 = getRandomWord(column3);
	updateStory();
}

function fourthWord() {
	const column4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
	part4 = getRandomWord(column4);
	updateStory();
}

function fifthWord() {
	const column5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
	part5 = getRandomWord(column5);
	updateStory();
}

speakButton1.addEventListener('click', function () {
	firstWord();
});

speakButton2.addEventListener('click', function () {
	secondWord();
});

speakButton3.addEventListener('click', function () {
	thirdWord();
});

speakButton4.addEventListener('click', function () {
	fourthWord();
});

speakButton5.addEventListener('click', function () {
	fifthWord();
});

speakButton6.addEventListener('click', function () {
	let fullStory = [part1, part2, part3, part4, part5].filter(Boolean).join(' ');
	speakNow(fullStory);
});

speakButton7.addEventListener('click', function() {
	firstWord();
	secondWord();
	thirdWord();
	fourthWord();
	fifthWord();
	let fullStory = [part1, part2, part3, part4, part5].filter(Boolean).join(' ');
	speakNow(fullStory);
})

resetStory.addEventListener('click', function() {
	part1 = '';
	part2 = '';
	part3 = '';
	part4 = '';
	part5 = '';
	container.textContent = '';
	container.style.display = 'none';
	button8.style.display = 'none';
})
