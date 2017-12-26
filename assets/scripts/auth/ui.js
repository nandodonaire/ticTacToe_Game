'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed up!')
  $('#message').css('color', 'green')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Sign up failed!')
  $('#message').css('color', 'red')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed in!')
  $('#message').css('color', 'green')
  store.user = data.user
  console.log('the stored data', store)
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Sign in failed!')
  $('#message').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  console.log('Changed password!')
  $('#message').text('Changed password!')
  $('#message').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password!')
  $('#message').css('color', 'red')
}

const signOutSuccess = function () {
  console.log('Signed out!')
  $('#message').text('Signed out!')
  $('#message').css('color', 'green')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Failed signing out!')
  $('#message').css('color', 'red')
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
