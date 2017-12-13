// main Array of objects
var aqNaruto = [
  {
    questionN: 1,
    q: 'who is naruto?',
    a: ['./imgs/q11.png', './imgs/q12.png', './imgs/q13.png', './imgs/q14.png'],
    answer: './imgs/q13.png'
  },
  {
    questionN: 2,
    q: 'who is sasuke?',
    a: ['./imgs/q15.png', './imgs/q16.png', './imgs/q17.png', './imgs/q18.png'],
    answer: './imgs/q18.png'
  }
    // set the variable index at 0, for the question

]
// the index of the array
var index = 0
// The end of my global scope
// Enables Jquery on the document
$(document).ready(function () {
    // onlcik buut that allows user to start the game
  $('#start').click(function (e) {
      // preventing button default actions
    e.preventDefault()
    // labels the input variable as the textbox for amount of players.
    var input = ($('#players')).val()
    // outputs the amount of players in the game based on conditional answers.
    if (input === '1') {
    // Created a variable for player to be appended to the DOM
      var $player1 = $("<div class='player-chioce'> <h1>Player 1</h1> <h2 id = 'p1score'>Score: <span id ='numberV'>0</span></h2></div>")
      $('#player-stats').append($player1)
      // invoke to start game function
      startGame()
    }// outputs the amount of players in the game based on conditional answers.
    else if (input === '2') {
        // creates two players on the DOM! then appends them to the DOM
      $player1 = $("<div class='player-choice'> <h1>Player 1</h1> <h2 id = 'p1score'>Score: 0</h2></div>")
      var $player2 = $("<div class='player-choice'> <h1>Player 2</h1> <h2 id = 'p1score'>Score: 0</h2></div>")
      // invoke to startGame function
      startGame()
      $('#player-stats').append($player1, $player2)
    } else {
        // lets them know the max amount of players.
      alert('too many players, it can only be two.')
    }
  })
  // creation of the start game function.
  function startGame () {
    // append the question to question-board in DOM
    $('#question-board').append(`<div class = 'active-question'> ${aqNaruto[index].q}</div>`)
    // For loop was created to loop through the array of images in my object.
    for (var i = 0; i < aqNaruto[index].a.length; i++) {
        // post question answers on answer-board
      $('#answer-board').append(`<div><img class ='active-choices' src = "${aqNaruto[index].a[i]}" /></div>`)
    }
    // creates onClick listner for the image elements active-choices
    $('.active-choices').on('click', function () {
        // gives the variable answer the value of the answer in the array
      var answer = `${aqNaruto[index].answer}`
        // gives the value of the clicked picture to userInput Variable.
      var userInput = $(this).attr('src')
        // If statment to check if the answer is right using userInpuut and answer variables.
      if (userInput === answer) {
          // score is the number value on the dom, it's selected using a span and the text method.
        var score$ = $('#numberV').text()
        // parse int, changes the number to a new score.
        var $newScore = parseInt(score$)
        // this adds 1 to the current dom element value using the += operand
        $('#numberV').text($newScore += 1)
        //goes to next question if it's right?
        nextQuestion()
      } else {
        alert('your wrong')
      }
      //end of onClick function
    })
    //createion of next question function
    function nextQuestion () {
        //empties out the boards and fetchs new data
      $('#question-board').empty()
      $('#answer-board').empty()
      startGame(index++)
    }
    $('#next').on('click', function () {
      console.log('bacon')
      nextQuestion()
    })
  }
})
