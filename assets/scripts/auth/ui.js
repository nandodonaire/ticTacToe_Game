'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#modalLabel').text('Successfully signed up!')
  $('#modalLabel').css('color', 'green')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#modalLabel').text('Sign up failed!')
  $('#modalLabel').css('color', 'red')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#modalLabel').text('Successfully signed in!')
  $('#modalLabel').css('color', 'green')
  $('.logged-in').removeClass('hide')
  $('.game-functionality').removeClass('hide')
  store.user = data.user
  console.log('the stored data', store)
}

const signInFailure = function (error) {
  console.error(error)
  $('#modalLabel').text('Sign in failed!')
  $('#modalLabel').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  console.log('Changed password!')
  $('#modalLabel').text('Changed password!')
  $('#modalLabel').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#modalLabel').text('Error changing password!')
  $('#modalLabel').css('color', 'red')
}

const signOutSuccess = function () {
  console.log('Signed out!')
  $('#modalLabel').text('Signed out!')
  $('modalLabel').css('color', 'green')
  $('.logged-in').addClass('hide')
  $('.game-functionality').addClass('hide')
  $('.game-board').addClass('hide')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#modalLabel').text('Failed signing out!')
  $('#modalLabel').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
