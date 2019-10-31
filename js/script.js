"use strict";

const qBtnSubmit = document.querySelector("#button-submit");
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

function isCorrectAnswer(user, correct) {
  return user.trim().toLowerCase() === correct;
}

function evaluateAnswer(e) {
  const user_input = e.value || e.target.value;
  if (isCorrectAnswer(user_input, selected_question.answer)) {
    window.location.replace("https://www.google.com");
    return false;
  } else {
    document.body.remove();
    return false;
  }
}

// Pick a prompt to display to the user
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

qBtnSubmit.addEventListener("click", evaluateAnswer);
qInput.addEventListener("keyup", function(e) {
  // Only react on enter key press
  if (e.key === "Enter") {
    evaluateAnswer(this);
    return false;
  }
});
