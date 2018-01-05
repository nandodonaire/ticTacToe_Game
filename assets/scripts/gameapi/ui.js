'use strict'

const store = require('../store')

const searchGamesSuccess = function (data) {
  // console.log(data)
  for (let i = 0; i <= data.games.length; i++) {
    // console.log(data.games[i])
    $('#jumbotron-message').text('Total number of games created: ' + [i])
    $('#jumbotron-message').css('color', 'green')
  }
}

const searchGamesFailure = function (data) {
  // console.error(error)
  $('#jumbotron-message').text('Unable to search games!')
  $('#jumbotron-message').css('color', 'red')
}

const searchGameSuccess = function (data) {
  // console.log(data)
  $('#jumbotron-message').text('Here is the game!')
  $('#jumbotron-message').css('color', 'green')
  const gameHtml = (
    `<ul>
    <li>Game Cells: ${data.game.cells}</li>
    <li>Game Over: ${data.game.over}</li>
    </ul>`
  )
  $('#jumbotron-message').append(gameHtml)
  // store.game = data.game
  // console.log('the stored data', store)
}

const searchGameFailure = function (data) {
  // console.error(error)
  $('#jumbotron-message').text('Unable to find the game!')
  $('#jumbotron-message').css('color', 'red')
}

const createGameSuccess = function (data) {
  // console.log('game id is', data.game.id)
  // console.log('Created game!')
  $('#jumbotron-message').text('Created ')
  $('#jumbotron-message').css('color', 'green')
  const gameHtml = (
    `<ul>
    <li>Game Id: ${data.game.id}</li>
    </ul>`
  )
  $('#jumbotron-message').append(gameHtml)
  store.game = data.game
  // console.log('the stored data', store)
}

const createGameFailure = function (data) {
  // console.error(error)
  $('#jumbotron-message').text('Unable to create game!')
  $('#jumbotron-message').css('color', 'red')
}

module.exports = {
  searchGamesSuccess,
  searchGamesFailure,
  searchGameSuccess,
  searchGameFailure,
  createGameSuccess,
  createGameFailure
  // updateGameSuccess,
  // updateGameFailure
}
