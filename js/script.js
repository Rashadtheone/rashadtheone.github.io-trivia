// main Array of objects
// AS: I would probably put this in another file!
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
  },
  {
    questionN: 3,
    q: 'Which move is Chidori',
    a: ['./imgs/q19.gif', './imgs/q20.gif', './imgs/q21.gif', './imgs/q22.gif'],
    answer: './imgs/q20.gif'
  },
  {
    questionN: 4,
    q: 'Who uses this the Rasengan?',
    a: ['./imgs/q23.png', './imgs/q24.png', './imgs/q25.png', './imgs/q26.png'],
    answer: './imgs/q23.png'
  },
  {
    questionN: 5,
    q: 'Which one is the most useless?',
    a: ['./imgs/q27.gif', './imgs/q28.gif', './imgs/q29.gif', './imgs/q30.gif'],
    answer: './imgs/q27.gif'
  },
  {
    questionN: 6,
    q: 'Which character is the first Shodiame Hokage?',
    a: ['./imgs/q31.png', './imgs/q32.png', './imgs/q33.png', './imgs/q34.png'],
    answer: './imgs/q31.png'
  },
  {
    questionN: 7,
    q: 'which character is the Seventh Hokage?',
    a: ['./imgs/q36.png', './imgs/q35.png', './imgs/q37.png', './imgs/q38.png'],
    answer: './imgs/q35.png'
  },
  {
    questionN: 8,
    q: 'Which person is a villan?',
    a: ['./imgs/q39.png', './imgs/q40.png', './imgs/q41.png', './imgs/q42.png'],
    answer: './imgs/q41.png'
  },
  {
    questionN: 9,
    q: 'Who created the flying Thunder God Technique?',
    a: ['./imgs/q43.png', './imgs/q44.png', './imgs/q45.png', './imgs/q46.png'],
    answer: './imgs/q46.png'
  },
  {
    questionN: 10,
    q: 'Who was good then evil and then turned good after dying?',
    a: ['./imgs/q47.gif', './imgs/q48.gif', './imgs/q49.gif', './imgs/q50.gif'],
    answer: './imgs/q49.gif'
  },
  {
    questionN: 11,
    q: 'THE END!'
  }
    // set the variable index at 0, for the question

]
// the index of the array
var index = 0
// The end of my global scope
// Enables Jquery on the document
$(document).ready(function () {
  $('#players').on('click', function () {
    $('input[type=text]').each(function () {
      $(this).val('')
    })
  })

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
      $player1 = $("<div class='player-choice'> <h1>Player 1</h1> <h2 id = 'p1score'>Score: <span id = 'numberV'> 0 </span></h2></div>")
      var $player2 = $("<div class='player-choice'> <h1>Player 2</h1> <h2 id = 'p2score'>Score: <span id = 'numberB'>0</span></h2></div>")
      // invoke to startGame function
      startGame2()
      $('#player-stats').append($player1, $player2)
    } else {
        // lets them know the max amount of players.
      alert('too many players, it can only be two.')
    }
  })
  function nextQuestion () {
    // empties out the boards and fetchs new data
    $('#question-board').empty()
    $('#answer-board').empty()
  // invokes nextQuestion
    startGame(index++)
  }
  // creation of the start game function.
  function startGame () {
    // AS: I would DRY up this code, looks like most of this is repeated in startGame2
    // you could

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
        // goes to next question if it's right?
      }
      checkForEnd()      
      // end of onClick function
    })
    function checkForEnd () {
      if (aqNaruto.questionN === 11) {
        console.log(aqNaruto.questionN)
        alert('you have reached the end of the game')
      } else {
        nextQuestion()
      }
    }
    // createion of next question function

    // next question skip question
    $('#next').on('click', function () {
      nextQuestion()
    })
    $('#rest').on('click', function () {
      location.reload()
    })
  }

  // I would call this something like startGame2Player
  function startGame2 () {
    // append the question to question-board in DOM
    $('#question-board').append(`<div class = 'active-question'> ${aqNaruto[index].q}</div>`)
    // For loop was created to loop through the array of images in my object.
    for (var i = 0; i < aqNaruto[index].a.length; i++) {
        // post question answers on answer-board
      $('#answer-board').append(`<div><img class ='active-choices' src = "${aqNaruto[index].a[i]}" /></div>`)
    }
    $('.active-choices').on('click', function () {
      var answer = `${aqNaruto[index].answer}`

      var userInput = $(this).attr('src')

      if (userInput === answer) {
        var score$ = $('#numberV').text()
        var $newScore = parseInt(score$)
        $('#numberV').text($newScore += 1)
        nextQuestion()
      } else if (userInput !== answer) {
        alert('player two turn')
        $('.active-choices').off()
        $('.active-choices').on('click', function () {
          var userInput2 = $(this).attr('src')

          if (userInput2 === answer) {
            var score2$ = $('#numberB').text()

            var $newScore2 = parseInt(score2$)
            console.log($('#numberB'))

            $('#numberB').text($newScore2 += 1)
            nextQuestion()
          } else {
            nextQuestion()
          }
        })
      }
    })
  }
})
