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
    a: ['../imgs/q15.png', '../imgs/q16.png', '../imgs/q17.png', '../imgs/q18.png'],
    answer: '../imgs/q18.png'
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
      // call to start game function
      startGame()
    }// outputs the amount of players in the game based on conditional answers.
    else if (input === '2') {
        // creates two players on the DOM!
      $player1 = $("<div class='player-choice'> <h1>Player 1</h1> <h2 id = 'p1score'>Score: 0</h2></div>")
      var $player2 = $("<div class='player-choice'> <h1>Player 2</h1> <h2 id = 'p1score'>Score: 0</h2></div>")
      startGame()
      $('#player-stats').append($player1, $player2)
    } else {
      alert('too many players, it can only be two.')
    }
  })
  function startGame () {
    $('#question-board').append(`<div class = 'active-question'> ${aqNaruto[index].q}</div>`)
    for (var i = 0; i < aqNaruto[index].a.length; i++) {
      $('#answer-board').append(`<div><img class ='active-choices' src = "${aqNaruto[index].a[i]}" /></div>`)
    }

    $('.active-choices').on('click', function () {
        var answer = `${aqNaruto[index].answer}`
        var userInput = $(this).attr('src')
        if (userInput === answer) {
          var score$ = $('#numberV').text()
            var $newScore = parseInt(score$)
            console.log($newScore)
            $('#numberV').text($newScore += 1)
        
            console.log('your right')
        } else {
            alert('your wrong')
        }
 })
  }
})
