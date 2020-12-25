"use strict";

const qForm = document.querySelector("form");
const qAnswerArea = document.querySelector("#full-answer");
const qImageContainer = document.querySelector("#captcha-image-container");

const input_box = `<input type="text" id="input-box" autocomplete="off" autofocus>`
const questions = [
  {
    "prompt": `Look over ${input_box}.`,
    "answer": "there",
    "images": ["there.png", "their.png", "theyre.png"]
  },
  {
    "prompt": `${input_box} the only one who can prevent forest fires.`,
    "answer": "you're",
    "images": ["your.png", "youre.png"]
  }
];

function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Determine if the visitor answered correctly
function isCorrectAnswer(guess, correct) {
  return guess.trim().toLowerCase() === correct;
}

function evaluateAnswer(e) {
  if (isCorrectAnswer(e.value, selected_question.answer)) {
    window.location.replace("https://www.google.com");
  } else {
    document.body.remove();
  }
}

// Pick a prompt to display to the visitor
const selected_question = selectRandom(questions);

// Generate the HTML for the image-based answer options
selected_question.images.forEach(img => {
  qImageContainer.insertAdjacentHTML(
    "beforeend",
    `<img class='captcha-image' width='200' height='116' src='img/${img}'>`
  );
});

// Display the prompt to be answered
qAnswerArea.insertAdjacentHTML("afterbegin", selected_question.prompt);
const qInput = document.querySelector("#input-box");

// Check the input
qForm.addEventListener("submit", function(e) {
  e.preventDefault();
  evaluateAnswer(qInput);
});
