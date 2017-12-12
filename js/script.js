$(document).ready(function () {
  $('#start').click(function (e) {
    e.preventDefault()
    var input = ($('#players')).val()
    let newGame = new GameStart(input)
  })
//     $('#brush').css('background', input.val())
//   })

//   var i
//   for (i = 0; i < 8000; i++) {
//     $('body').append("<div class = 'square'> </div>")
//   }
//   $('.square').mouseover(function () {
//     $(this).css('background', input.val())
//

  class GameStart {
    constructor (newGame) {
      this.newGame = newGame.value
      if (newGame === '1') {
        var $player1 = $( "<div class='player-chioce'> <h1>Player 1</h1> <h2>Score: 0</h2></div>" )
        $("#player-stats").append($player1)
      } else {
        var $player1 = $( "<div class='player-choice'> <h1>Player 1</h1> <h2>Score: 0</h2></div>" )
        var $player2 = $( "<div class='player-choice'> <h1>Player 2</h1> <h2>Score: 0</h2></div>" )
        $("#player-stats").append($player1, $player2)
      }
    }
     startGame (newGame) {
        var players = this.newGame
         for(players; players < 1; players++) {
            cosnole.log('bacon')
         }
     }
    }
  class Questions {

}

  class Answers extends Questions {

}

  class Result {

}
})
