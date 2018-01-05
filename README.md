ticTacToe_Game

A Tic Tac Toe game that allows you to create games on an api, update existing
games on the api, and alows you to view previous games saved on the api. The
game requires you to create a user and login in order to create games, update
games view, and view existing games.

Technologies Used: Javascript, CSS, jQuery, Bootstrap, Ajax

Planning:

I initially planned to always display the game board and display the winner and
messages in a pop-up or modal, but decided against relying so much on pop-ups
and modals. Since updating the games on the api requires a user's login token
and I wanted to update the games as soon as the grid is clicked, I decided to
only dispay the game board once the user logs in.

Link to wireframe:

https://i.imgur.com/dtcRYM0.jpg

User Stories:

1) As a user, I want to me able to sign up and login so that I can view my
results.

2) As a user, I want to see a prompt after each game to display who won.

3) As a user, I want to be able to login to see my statistics
(such as number of games created).

4) As a user, I want to be able to restart the game by clicking on a button in
the UI.

Challenges encountered:

It took me some time to complete the endGame function to prevent users from
clicking on the board once the game it over. I was initially using the .off()
jQuery method to clear the click events after the game was over, but this was
entirely wiping out the click events, so you had to manually add them once you
ran the restartGame function. I was able to work around this by adding some
different logic to the function.

Problems to be fixed on future release:

1) When a user is not signed in, the blue button should display "Sign In". Once
the user is logged in, change that button to read "Account".
