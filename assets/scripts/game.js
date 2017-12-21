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

const checkForWinner = function () {
  if (currentGame.cells[0] === 'x' && currentGame.cells[1] === 'x' && currentGame.cells[2] === 'x' || currentGame.cells[3] === 'x' && currentGame.cells[4] === 'x' && currentGame.cells[5] === 'x') {
    console.log('x is the winner!')
  }
}

$('#index-zero').on('click', function () {
  // console.log('Clicking on index0')
  // check to see if something has been added to currentGame.cells[0]. If so,
  // don't add anything and show a message saying that you can't add anything to
  // this space. If not, add either 'x' or 'o' to currentGame.cells[0]

  // const i = 0
  // if (currentGame.cells[i] === '') {
  $('#index-zero').text('x')
  // } else {
  //   console.log("You can't add to this space")
  // }
  currentGame.cells.splice(0, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})

$('#index-one').on('click', function () {
  // console.log('Clicking on index1')
  $('#index-one').text('x')
  currentGame.cells.splice(1, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-two').on('click', function () {
  // console.log('Clicking on index2')
  $('#index-two').text('x')
  currentGame.cells.splice(2, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-three').on('click', function () {
  // console.log('Clicking on index3')
  $('#index-three').text('x')
  currentGame.cells.splice(3, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-four').on('click', function () {
  // console.log('Clicking on index4')
  $('#index-four').text('x')
  currentGame.cells.splice(4, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-five').on('click', function () {
  // console.log('Clicking on index5')
  $('#index-five').text('x')
  currentGame.cells.splice(5, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-six').on('click', function () {
  // console.log('Clicking on index6')
  $('#index-six').text('x')
  currentGame.cells.splice(6, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-seven').on('click', function () {
  // console.log('Clicking on index7')
  $('#index-seven').text('x')
  currentGame.cells.splice(7, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
$('#index-eight').on('click', function () {
  // console.log('Clicking on index8')
  $('#index-eight').text('x')
  currentGame.cells.splice(8, 1, 'x')
  console.log(currentGame.cells)
  checkForWinner()
})
