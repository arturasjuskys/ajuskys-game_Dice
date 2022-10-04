# Minigame: Dice Game

<!-- ### The Complete JavaScript Course 2021: From Zero to Expert! | [Udemy.com](https://www.udemy.com/course/the-complete-javascript-course/) -->

<!-- * `Purchased Course`: 24.09.2020 -->
<!-- * `Finished this Project`: 06.11.2020 11:56 -->

[Access game here...](https://ajuskys-game-dice.netlify.app/)

## Description

Two players minigame, roll the dice multiple times to add each roll to the current value and try not to roll 1, otherwise the other player gets the turn. Win the game by reaching 50 points before your opponent.

### DESIGN

One page application developed using HTML and CSS. Interactivity with the game is controlled by JavaScript and Document Object Model (DOM).

### LOGIC

The game is controlled by three event listeners attached to Roll Dice, Hold, and New Game buttons.

`Roll Dice button` initiales random number from 1 to 6 and displays according dice image, dice values will be added to current score, if 1 is rolled switchPlayer function will run.

`Hold button` checks for current player and adds current value to score and runs switchPlayer function.

`New Game button` runs a function to reset variables to initial game conditions and set player 1 as the current active player.

![](./assets/745%20-%20Dice%20Game.jpg)
![](./assets/744%20-%20Dice%20Game.jpg)
![](./assets/742%20-%20Dice%20Game.jpg)
![](./assets/743%20-%20Dice%20Game.jpg)
