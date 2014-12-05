/* jshint browser: true */

(function(){
  "use strict";

  function _selectRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  var selectedAnswer,
      btnSubmit = document.querySelector("#button-submit");

  window.onload = (function() {
    var prefix     = "./img/",
        images     = ["your.png", "youre.png", "there.png", "their.png", "theyre.png"],
        answers    = ['"&nbsp;&nbsp;input-box the only one who can prevent forest fires."', '"Look over input-box&nbsp;."'],
        template   = "<img class='captcha-image' height='100' src='prefix-image'><br><br>",
        container  = document.querySelector("#captcha-image-container");
    selectedAnswer = _selectRandom(answers).replace(/input-box/, '<input type="text" id="input-box" autocomplete="off">');

    if (selectedAnswer.indexOf("forest fires") > -1) {
      container.innerHTML = template.replace(/prefix-image/, prefix + images[0]);
      container.innerHTML += template.replace(/prefix-image/, prefix + images[1]);

    } else {
      container.innerHTML = template.replace(/prefix-image/, prefix + images[2]);
      container.innerHTML += template.replace(/prefix-image/, prefix + images[3]);
      container.innerHTML += template.replace(/prefix-image/, prefix + images[4]);
    }
    document.querySelector("#full-answer").innerHTML = selectedAnswer;

    document.querySelector("#input-box").onkeypress = function(e) {
      if (e.keyCode === 13) {
        btnSubmit.click();
        return false;
      }
    };
  });

  btnSubmit.addEventListener("click", function() {
    var userInput      = document.querySelector("#input-box").value,
        theRightAnswer = selectedAnswer.indexOf("forest fires") > -1 ? "you're" : "there";

    if (userInput.toLowerCase() === theRightAnswer) {
      window.location.replace("https://google.com");
    } else {
      document.querySelector("body").innerHTML = "";
    }
    return false;
  });
})();
