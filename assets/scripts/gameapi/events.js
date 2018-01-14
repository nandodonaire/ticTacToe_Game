'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSearchGames = function (event) {
  const data = getFormFields(this)
  // console.log('events', data)
  event.preventDefault()
  gameApi.searchGames(data)
    .then(gameUi.searchGamesSuccess)
    .catch(gameUi.searchGamesFailure)
}

const onSearchGame = function (event) {
  const data = getFormFields(this)
  // console.log('events', data)
  event.preventDefault()
  gameApi.searchGame(data)
    .then(gameUi.searchGameSuccess)
    .catch(gameUi.searchGameFailure)
  $('#game-search').find('input:text, select, textarea').val('')
}

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

// const onUpdateGame = function (event) {
//   const data = getFormFields(this)
//   console.log('events', data)
//   event.preventDefault()
//   gameApi.updateGame(data)
//     .then(gameUi.updateGameSuccess)
//     .catch(gameUi.updateGameFailure)
// }

const addHandlers = function () {
  $('#games-search').on('submit', onSearchGames)
  $('#game-search').on('submit', onSearchGame)
  $('#game-create').on('submit', onCreateGame)
  // $('#game-update').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
