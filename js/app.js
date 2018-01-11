'use strict';

// tally to keep track of # of correct answers
var tally = 0, flag = false, counter = 0, userName;

function getUserName() {
  var userName = prompt('Hi, what is your name?');
  console.log('user\'s name is ' + userName);
  alert('Hello ' + userName + '! Let\'s play a Game.');
}

function guessCity() {
  var city = prompt('Do you think I live in Seattle? (y/n)').toLowerCase();
  console.log('For city, user entered: ' + city);
  if (city === 'y') {
    tally++;
    alert('Yes I do live in Seattle!');
  } else if (city === 'n') {
    alert('Sorry you are incorrect.');
  } else {
    alert('Please enter y or n');
  }
}

function guessPets() {
  var pets = prompt('Do I have any pets? (Y/N)').toUpperCase();
  console.log('For pets, user entered: ' + pets);
  if (pets === 'Y') {
    tally++;
    alert('Yes, I have a dog named Whiskey!');
  } else if (pets === 'N') {
    alert('Sorry you are incorrect. I have a dog.');
  } else {
    alert('Please enter Y or N');
  }
}

function guessCar() {
  var car = prompt('Do I drive an awesome car? (YES/NO)').toUpperCase();
  console.log('For car, user entered: ' + car);
  if (car === 'YES') {
    tally++;
    alert('Yes, I have a Honda Civic!');
  } else if (car === 'NO') {
    alert('Sorry you guessed wrong.');
  } else {
    alert('Please enter YES or NO');
  }
}

function guessVeg() {
  var veg = prompt('Am I a vegetarian? (yes/no)').toLowerCase();
  console.log('For veg, user entered: ' + veg);
  if (veg === 'yes') {
    alert('Nope! I love me some meat!');
  } else if (veg === 'no') {
    tally++;
    alert('Ding! Ding! Ding! We have a winner!');
  } else {
    alert('Please enter yes or no');
  }
}

function guessCf() {
  var cf = prompt('Do I love Code Fellows? (y/n)').toLowerCase();
  console.log('For CF, user entered: ' + cf);
  if (cf === 'y') {
    tally++;
    alert('Yes, of course I love Code Fellows!');
  } else if (cf === 'n') {
    alert('Is that your final answer?');
  } else {
    alert('Please enter y or n');
  }
}

function guessFavNumber() {
  var favNumber = 7; 
  counter = 0;
  do {
    var numGuess = parseInt(prompt('What do you think my favorite number is? You will have 4 guesses.'));
    counter++;
    if (numGuess === favNumber) {
      alert('Good guess! You got it!');
      tally++;
      flag = true;
    } else if (counter > 3) {
      alert('Sorry, you are out of guesses.');
      flag = true;
    } else if (numGuess > favNumber) {
      alert('Sorry, your guess is too high. Try again.');
    } else {
      alert('Sorry, your guess is too low. Try again.');
    }
  } while (flag === false);
}

function guessState() {
  var state = ['New Jersey', 'California'];
  counter = 0;
  flag = false;
  do {
    var stateGuess = prompt('Can you guess a state that I have lived in besides Washington? You have 6 guesses. Please use proper capitalization.');
    counter++;
    for (var i = 0; i < state.length; i++) {
      if (stateGuess === state[i]) {
        alert('Yes I did live in ' + state[i]);
        tally++;
        flag = true;
        break;
      }
    }
    if (counter > 5) {
      alert('Sorry, you are out of guesses.');
      flag = true;
    }
  } while (flag === false);
  alert('The other states I have lived in are California and New Jersey.');
}

getUserName();
guessCity();
guessPets();
guessCar();
guessVeg();
guessCf();
guessFavNumber();
guessState();

alert('Great job ' + userName + '! You got ' + tally + ' out of 7 questions correct.');