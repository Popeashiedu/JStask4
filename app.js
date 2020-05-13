//selectors
const question = document.querySelector(".question");
const previousButton = document.querySelector(".btn-1");
const nextButton = document.querySelector(".btn-2");
const answer1 = document.querySelector(".answer-1");
const answer2 = document.querySelector(".answer-2");
const answer3 = document.querySelector(".answer-3");
const allAnswers = document.querySelector(".answers");
const imgLoader = document.querySelector(".img");
const answerContainer = document.querySelector(".answer-container");
const score = document.querySelector(".counter");
const indexCounter = document.querySelector(".index");
const image = document.querySelector(".image");

//eventlisteners
nextButton.addEventListener("click", countIncrement);
//previousButton.addEventListener("click", countDecrement);
answer1.addEventListener("click", answerChecker);
answer2.addEventListener("click", answerChecker);
answer3.addEventListener("click", answerChecker);
nextButton.addEventListener("click", clearStyles);
//previousButton.addEventListener("click", clearStyles);

//miscellaneous
let questionsToSelect = [
  "What is Pope's real name?",
  "How tall is Pope?",
  "What is his background course of study?",
  "Does he have a nice smile?",
  "Would you recommend Pope to your customers for a job",
  "Bonus question\n Eniola, do you wanna go out on a date? ",
];

let answersToSelect = [
  ["Lebron James", "Benedict Ashiedu", "Aliko Dangote"],
  ["5ft 7", "5ft 10", "6ft 2"],
  ["Agricultural Science", "Freshnology", "Electrical/Electronics Engineering"],
  ["Maybe", "Of course he does", "Most definitely"],
  ["I'll consider", "100%", "I have a job for him right now"],
  ["You say?", "When can we meet?", "After Corona"],
];

let counter = -1;
let correct = 0;

//functions

function countIncrement(event) {
  if (counter <= 4) {
    counter += 1;
    let indexing = counter + 1;
    indexCounter.innerText = `Q${indexing}`;
    answerContainer.classList.remove("done");
    //console.log(counter);
    //console.log(questionsToSelect[counter]);
    question.innerText = questionsToSelect[counter];
    //console.log(answersToSelect[counter][0]);
    answer1.innerText = answersToSelect[counter][0];
    answer2.innerText = answersToSelect[counter][1];
    answer3.innerText = answersToSelect[counter][2];
    answerContainer.style.opacity = "1";

    //displays score
    score.innerText = "You have answered " + correct + " correctly";
  }
  //finish button
  else if (counter > 3) {
    nextButton.innerText = "Finish";
    answerContainer.classList.add("done");
    indexCounter.remove();
    question.innerText = "You are done, click finish";
    answerContainer.remove();
    //nested event listener to end quiz
    nextButton.addEventListener("click", function () {
      answerContainer.remove();
      //previousButton.remove();
      question.classList.add("end-prompt");
      score.remove();
      if (correct >= 3) {
        image.src = "pope.jpg";
        question.innerText =
          "Great Job! " + correct + " out of " + counter + " is not bad";
        nextButton.innerText = "Try again?";
        nextButton.addEventListener("click", function retry() {
          window.location.reload();
        });
      } else {
        image.src = "photo2.jfif";
        question.innerText =
          correct +
          " out of " +
          counter +
          "\n Really? You couldn't get more than 3? Try again!";
        nextButton.innerText = "Try again!!!";
        nextButton.addEventListener("click", function retry() {
          window.location.reload();
        });
      }

      //previousButton.remove();
      nextButton.classList.add("finish-button");
    });
  }
}
function countDecrement(event) {
  if (counter >= 1) {
    counter -= 1;
    let indexing = counter + 1;
    indexCounter.innerText = `Q${indexing}`;
    console.log(counter);
    console.log(questionsToSelect[counter]);
    question.innerText = questionsToSelect[counter];
    answer1.innerText = answersToSelect[counter][0];
    answer2.innerText = answersToSelect[counter][1];
    answer3.innerText = answersToSelect[counter][2];
  }
}
function answerChecker(event) {
  //console.log(event.target.innerText);
  answerContainer.classList.add("done");
  let checkAnswer = event.target.innerText;
  if (counter == 0) {
    if (checkAnswer === "Benedict Ashiedu") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
      correct += 1;
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }

  if (counter == 1) {
    if (checkAnswer === "6ft 2") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
      correct += 1;
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }
  if (counter == 2) {
    if (checkAnswer === "Electrical/Electronics Engineering") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
      correct += 1;
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }
  if (counter == 3) {
    if (checkAnswer === "Of course he does") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
      correct += 1;
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }
  if (counter == 4) {
    if (checkAnswer === "I have a job for him right now") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
      correct += 1;
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }
  if (counter == 5) {
    if (checkAnswer === "When can we meet?") {
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
  }
}

//clear the colors when next is clicked
function clearStyles() {
  answer1.style = "clear";
  answer2.style = "clear";
  answer3.style = "clear";
}

/*window.onload = function () {
  console.log("Locked and loaded");
  const introDiv = document.createElement("div");
  introDiv.classList.add("intro-div");
  introDiv.style.backgroundColor = "red";
  introDiv.style.width = "500px";
  answerContainer.appendChild(introDiv);
};*/
