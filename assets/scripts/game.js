'use strict'

const config = require('./config')
const store = require('./store')
// const gameApi = require('./gameapi/api')

// this is the blank game board
let currentGame = {
  id: 1,
  cells: ['', '', '', '', '', '', '', '', ''],
  over: false,
  player_x: {
    id: 1,
    email: 'and@and.com'
  },
  player_o: null
}

// playerToken is always 'x' to start the game.
let playerToken = 'x'

// this function changes the token ('x' or 'o') that is added to the
// currentGame.cells array and to the DOM.
const changeTurn = function () {
  if (playerToken === 'x') {
    playerToken = 'o'
    // console.log(playerToken)
    $('#jumbotron-message2').text("It's O's turn!")
  } else {
    playerToken = 'x'
    // console.log(playerToken)
    $('#jumbotron-message2').text("It's X's turn!")
  }
  console.log(playerToken)
}

// this is a counter of the number of turns
let moves = 0

// this function checks for a tie if the number of moves is 9, sets the
// currentGame.over to true, and ends the game.
const checkForTie = function () {
  if (moves === 9) {
    console.log("It's a tie!")
    $('#jumbotron-message').text("It's a tie!")
    currentGame.over = true
    endGame()
  }
}

// this function ends the game (currentGame.over to true) when 'x' or 'o'
// win or when the game is tied. Also prevents further clicks on the
// game board.
const endGame = function () {
  if (currentGame.over === true) {
    console.log('Restart game')
    // need a way to re-enable all of the click events once restartGame is
    // invoked.
    // $('.box').off('click')
    currentGame.cells = ''
  }
}

const restartGame = function () {
  currentGame = {
    id: 1,
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player_x: {
      id: 1,
      email: 'and@and.com'
    },
    player_o: null
  }
  $('.box').empty()
  $('.game-board').removeClass('hide')
  $('#jumbotron-message').empty()
  $('#jumbotron-message2').empty()
  moves = 0
  playerToken = 'x'
}
$('#game-create').on('submit', restartGame)

// this function checks to see if either 'x' or 'o' have won. If so,
// it changes the currentGame.over = true and invokes the endGame function.

const checkForWinner = function () {
  if ((currentGame.cells[0] === 'x' && currentGame.cells[1] === 'x' && currentGame.cells[2] === 'x') || (currentGame.cells[3] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[5] === 'x') || (currentGame.cells[6] === 'x' && currentGame.cells[7] === 'x' && currentGame.cells[8] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[3] === 'x' && currentGame.cells[6] === 'x') || (currentGame.cells[1] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[7] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[1] === 'x' && currentGame.cells[2] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[8] === 'x') || (currentGame.cells[2] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[6] === 'x')) {
    console.log('x is the winner!')
    $('#jumbotron-message').text('X is the winner!')
    currentGame.over = true
    endGame()
  } else if ((currentGame.cells[0] === 'o' && currentGame.cells[1] === 'o' && currentGame.cells[2] === 'o') || (currentGame.cells[3] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[5] === 'o') || (currentGame.cells[6] === 'o' && currentGame.cells[7] === 'o' && currentGame.cells[8] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[3] === 'o' && currentGame.cells[6] === 'o') || (currentGame.cells[1] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[7] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[1] === 'o' && currentGame.cells[2] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[8] === 'o') || (currentGame.cells[2] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[6] === 'o')) {
    console.log('o is the winner!')
    $('#jumbotron-message').text('O is the winner!')
    currentGame.over = true
    endGame()
  }
}

// this function is to update the api after each click. Tried adding this to
// api.js file, but was having issues getting that to work.

const updateGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': data,
          'value': playerToken
        },
        'over': currentGame.over
      }
    }
  })
}

// const clickEvent = function (data) {
//   console.log(data)
//   if (currentGame.cells[data] === '') {
//     $(this).text(playerToken)
//     currentGame.cells.splice(data, 1, playerToken)
//     // console.log(currentGame.cells)
//     checkForWinner()
//     moves++
//     checkForTie()
//     updateGame(data)
//     changeTurn()
//   } else {
//     console.log("You can't add to this space!")
//     $('#jumbotron-message').text("You can't add to this space!")
//   }
// }

// these are all of the click events for the grid.

// $('#index0').on('click', clickEvent, 0)
// $('#index0').on('click', updateGame, 0)

$('#index0').on('click', function () {
  if (currentGame.cells[0] === '') {
    $('#index0').text(playerToken)
    currentGame.cells.splice(0, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(0)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index1').on('click', function () {
  // console.log('Clicking on index1')
  if (currentGame.cells[1] === '') {
    $('#index1').text(playerToken)
    currentGame.cells.splice(1, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(1)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index2').on('click', function () {
  // console.log('Clicking on index2')
  if (currentGame.cells[2] === '') {
    $('#index2').text(playerToken)
    currentGame.cells.splice(2, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(2)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index3').on('click', function () {
  if (currentGame.cells[3] === '') {
    $('#index3').text(playerToken)
    currentGame.cells.splice(3, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(3)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index4').on('click', function () {
  if (currentGame.cells[4] === '') {
    $('#index4').text(playerToken)
    currentGame.cells.splice(4, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(4)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index5').on('click', function () {
  if (currentGame.cells[5] === '') {
    $('#index5').text(playerToken)
    currentGame.cells.splice(5, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(5)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index6').on('click', function () {
  if (currentGame.cells[6] === '') {
    $('#index6').text(playerToken)
    currentGame.cells.splice(6, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(6)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index7').on('click', function () {
  if (currentGame.cells[7] === '') {
    $('#index7').text(playerToken)
    currentGame.cells.splice(7, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(7)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

$('#index8').on('click', function () {
  if (currentGame.cells[8] === '') {
    $('#index8').text(playerToken)
    currentGame.cells.splice(8, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    updateGame(8)
    changeTurn()
  } else if (currentGame.cells !== '') {
    console.log("You can't add to this space!")
    $('#jumbotron-message2').text("You can't add to this space!")
  } else {
    $('#jumbotron-message').text('Please start a New Game!')
  }
})

// these lines hide the options that should only be available while logged in.
$('.logged-in').addClass('hide')
$('.game-functionality').addClass('hide')
$('.game-board').addClass('hide')
