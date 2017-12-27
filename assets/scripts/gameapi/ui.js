'use strict'

const store = require('../store')

const searchGamesSuccess = function (data) {
  console.log(data)
  $('#message').text('Here are the games!')
  $('#message').css('color', 'green')
}

const searchGamesFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to search games!')
  $('#message').css('color', 'red')
}

const searchGameSuccess = function (data) {
  console.log(data)
  $('#message').text('Here is the game!')
  $('#message').css('color', 'green')
  store.game = data.game
  console.log('the stored data', store)
}

const searchGameFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to find the game!')
  $('#message').css('color', 'red')
}

const createGameSuccess = function (data) {
  // console.log(data)
  console.log('Created game!')
  $('#message').text('Created game!')
  $('#message').css('color', 'green')
  store.game = data.game
  console.log('the stored data', store)
}

const createGameFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to create game!')
  $('#message').css('color', 'red')
}

const updateGameSuccess = function (data) {
  console.log('Updated game!')
  console.log(data)
  $('#message').text('Updated game!')
  $('#message').css('color', 'green')
}

const updateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Unable to update game!')
  $('#message').css('color', 'red')
}

module.exports = {
  searchGamesSuccess,
  searchGamesFailure,
  searchGameSuccess,
  searchGameFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
