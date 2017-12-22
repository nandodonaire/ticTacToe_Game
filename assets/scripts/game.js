'use strict'

const currentGame = {
  id: 1,
  cells: ['', '', '', '', '', '', '', '', ''],
  over: false,
  player_x: {
    id: 1,
    email: 'and@and.com'
  },
  player_o: null
}

let playerToken = 'x'

const changeTurn = function () {
  if (playerToken === 'x') {
    playerToken = 'o'
    console.log(playerToken)
  } else {
    playerToken = 'x'
    console.log(playerToken)
  }
}

const checkForWinner = function () {
  if ((currentGame.cells[0] === 'x' && currentGame.cells[1] === 'x' && currentGame.cells[2] === 'x') || (currentGame.cells[3] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[5] === 'x') || (currentGame.cells[6] === 'x' && currentGame.cells[7] === 'x' && currentGame.cells[8] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[3] === 'x' && currentGame.cells[6] === 'x') || (currentGame.cells[1] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[7] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[1] === 'x' && currentGame.cells[2] === 'x') || (currentGame.cells[0] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[8] === 'x') || (currentGame.cells[2] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[6] === 'x')) {
    console.log('x is the winner!')
  } else if ((currentGame.cells[0] === 'o' && currentGame.cells[1] === 'o' && currentGame.cells[2] === 'o') || (currentGame.cells[3] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[5] === 'o') || (currentGame.cells[6] === 'o' && currentGame.cells[7] === 'o' && currentGame.cells[8] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[3] === 'o' && currentGame.cells[6] === 'o') || (currentGame.cells[1] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[7] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[1] === 'o' && currentGame.cells[2] === 'o') || (currentGame.cells[0] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[8] === 'o') || (currentGame.cells[2] === 'o' && currentGame.cells[4] === 'o' && currentGame.cells[6] === 'o')) {
    console.log('o is the winner!')
  }
}

$('#index-zero').on('click', function () {
  // console.log('Clicking on index0')
  // check to see if something has been added to currentGame.cells[0]. If so,
  // don't add anything and show a message saying that you can't add anything to
  // this space. If not, add either 'x' or 'o' to currentGame.cells[0]

  // const i = 0
  // if (currentGame.cells[i] === '') {
  if (currentGame.cells[0] === '') {
    $('#index-zero').text(playerToken)
    currentGame.cells.splice(0, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})

$('#index-one').on('click', function () {
  // console.log('Clicking on index1')
  if (currentGame.cells[1] === '') {
    $('#index-one').text(playerToken)
    currentGame.cells.splice(1, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-two').on('click', function () {
  // console.log('Clicking on index2')
  if (currentGame.cells[2] === '') {
    $('#index-two').text(playerToken)
    currentGame.cells.splice(2, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-three').on('click', function () {
  if (currentGame.cells[3] === '') {
    $('#index-three').text(playerToken)
    currentGame.cells.splice(3, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-four').on('click', function () {
  if (currentGame.cells[4] === '') {
    $('#index-four').text(playerToken)
    currentGame.cells.splice(4, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-five').on('click', function () {
  if (currentGame.cells[5] === '') {
    $('#index-five').text(playerToken)
    currentGame.cells.splice(5, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-six').on('click', function () {
  if (currentGame.cells[6] === '') {
    $('#index-six').text(playerToken)
    currentGame.cells.splice(6, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-seven').on('click', function () {
  if (currentGame.cells[7] === '') {
    $('#index-seven').text(playerToken)
    currentGame.cells.splice(7, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
$('#index-eight').on('click', function () {
  if (currentGame.cells[8] === '') {
    $('#index-eight').text(playerToken)
    currentGame.cells.splice(8, 1, playerToken)
    console.log(currentGame.cells)
    checkForWinner()
    changeTurn()
  } else {
    console.log("You can't add to this space!")
  }
})
