'use strict'

const config = require('./config')
const store = require('./store')

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
    $('.box').off('click')
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

// these are all of the click events for the grid.

$('#index0').on('click', function () {
  if (currentGame.cells[0] === '') {
    $('#index0').text(playerToken)
    currentGame.cells.splice(0, 1, playerToken)
    // console.log(currentGame.cells)
    checkForWinner()
    moves++
    checkForTie()
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 0,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 1,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 2,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 3,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 4,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 5,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 6,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 7,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
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
    const updateGame = function () {
      return $.ajax({
        url: config.apiOrigin + '/games/' + store.game.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'game': {
            'cell': {
              'index': 8,
              'value': playerToken
            },
            'over': currentGame.over
          }
        }
      })
    }
    updateGame()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
    $('#jumbotron-message').text("You can't add to this space!")
  }
})

// these lines hide the options that should only be available while logged in.
$('.logged-in').addClass('hide')
$('.game-functionality').addClass('hide')
$('.game-board').addClass('hide')
