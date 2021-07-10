const questions = [
  {
      question: "Which capital is called 'City of Music' and 'City of Dreams'?",
      optionA: "Amsterdam",
      optionB: "Berlin",
      optionC: "Vienna",
      correctOption: "optionC"
  },

  {
      question: "The last capital city in the world divided by border zone is?",
      optionA: "Athens",
      optionB: "Nicosia",
      optionC: "Lisbon",
      correctOption: "optionB"
  },

  {
      question: "Which capital is famous from its: beer, waffles, french fries and chocolate?",
      optionA: "Brussels",
      optionB: "Paris",
      optionC: "Berlin",
      correctOption: "optionA"
  },

  {
      question: "Which capital has: the largest train station in Europe, more ‚Döner‘ Kebap shops than Istanbul and its own beer, called – Weiße?",
      optionA: "Vienna",
      optionB: "Brussels",
      optionC: "Berlin",
      correctOption: "optionC"
  },

  {
      question: "Which city has a mascot she-wolf that cared for brothers, the mythological founders of this capital?",
      optionA: "Rome",
      optionB: "Madrid",
      optionC: "Lisbon",
      correctOption: "optionA"
  },

  {
      question: "Which capital was founded by the Thracian tribes and is built on top of Roman ruins?",
      optionA: "Athens",
      optionB: "Sofia",
      optionC: "Rome",
      correctOption: "optionB"
  },

  {
      question: "Which capital is lighting up every night by over 200 old-school gas lamps since their installation in 1863?",
      optionA: "Vilnius",
      optionB: "Warsaw",
      optionC: "Zagreb",
      correctOption: "optionC"
  },

  {
      question: "Which city is the smallest european capital?",
      optionA: "Tallin",
      optionB: "Riga",
      optionC: "Vallette",
      correctOption: "optionC"
  },

  {
      question: "In which capital the locals consume the most beer per capita in the world?",
      optionA: "Prague",
      optionB: "Warsaw",
      optionC: "Berlin",
      correctOption: "optionA"
  },

  {
      question: "In which city is the largest (and heaviest) building in the world – Palace of Parliament?",
      optionA: "Paris",
      optionB: "Stockholm",
      optionC: "Buckarest",
      correctOption: "optionC"
  },

  {
      question: "Which capital is a home to the Little Mermaid?",
      optionA: "Berlin",
      optionB: "Warsaw",
      optionC: "Copenhagen",
      correctOption: "optionC"
  },

  {
      question: "Which capital became the venue for the award of the first Nobel Prizes, in the 1901?",
      optionA: "Stockholm",
      optionB: "Copenhagen",
      optionC: "Helsinki",
      correctOption: "optionA"
  },


  {
      question: "Which city has the most thermal water springs?",
      optionA: "Riga",
      optionB: "Vilnius",
      optionC: "Budapest",
      correctOption: "optionC"
  },

  {
      question: " Which city has the secret passages, under the Old Town, the labyrinth of 17th century tunnels?",
      optionA: "Dublin",
      optionB: "Tallin",
      optionC: "Warsaw",
      correctOption: "optionB"
  },

  {
      question: "Which capital is called the: 'Daughter of the Baltic' and the 'White City of the North'?",
      optionA: "Helsinki",
      optionB: "Stockholm",
      optionC: "Riga",
      correctOption: "optionA"
  },

  {
      question: "Which capital is called the 'Phoenix City', that has risen repeatedly from the ashes of war?",
      optionA: "Berlin",
      optionB: "Warsaw",
      optionC: "Budapest",
      correctOption: "optionB"
  },

  {
      question: "Which capital in the Europe is oldest one?",
      optionA: "Lisbon",
      optionB: "Athens",
      optionC: "Rome",
      correctOption: "optionB"
  },

  {
      question: "Which capital name in old local language means 'Black Pool'?",
      optionA: "Dublin",
      optionB: "Madrid",
      optionC: "Tallin",
      correctOption: "optionA"
  },

  {
      question: "Which capital has famous from it's historical center noted in the UNESCO World Heritage Site, for its Art Nouveau/Jugendstil architecture?",
      optionA: "Stockholm",
      optionB: "Helsinki",
      optionC: "Riga",
      correctOption: "optionC"
  },

  {
      question: "Which city is famous from the one of the world’s most top-secret recipes: Pastéis da nata, knowing only by 3 people in the world?",
      optionA: "Lisbon",
      optionB: "Madrid",
      optionC: "Paris",
      correctOption: "optionA"
  },

  {
      question: "Which capital was recognized by the Guinness World Records as the site, where the largest coin pyramid ever was created?",
      optionA: "Zagreb",
      optionB: "Vilnius",
      optionC: "Ljubljana",
      correctOption: "optionB"
  },

  {
      question: "Which capital city has the most museums per capita in the world?",
      optionA: "Warsaw",
      optionB: "Paris",
      optionC: "Amsterdam",
      correctOption: "optionC"
  },

  {
      question: "In which capital is recognized by the Guinness World Records for local Restaurant Chiggeri, which offers a wine life of 1,746 distinct wines?",
      optionA: "Luxembourg City",
      optionB: "Paris",
      optionC: "Madrid",
      correctOption: "optionA"
  },

  {
      question: "Which city is called the 'Green capital of Dragons'?",
      optionA: "Dublin",
      optionB: "Ljubljana",
      optionC: "Bratislava",
      correctOption: "optionB"
  },

  {
      question: "Which capital is the second biggest city in the European Union?",
      optionA: "Madrid",
      optionB: "Berlin",
      optionC: "Paris",
      correctOption: "optionA"
  },

  {
      question: "Which city is the world’s only national capital that shares its city borders with two independent countries?",
      optionA: "Zagreb",
      optionB: "Dublin",
      optionC: "Bratislava",
      correctOption: "optionC"
  },
 
  {
      question: "Which capital is called 'City of Light'?",
      optionA: "Madrid",
      optionB: "Paris",
      optionC: "London",
      correctOption: "optionB"
  }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 26) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })
 
  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second
  setTimeout(() => {
      if (indexNumber <= 9) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}