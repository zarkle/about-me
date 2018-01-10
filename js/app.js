'use strict';

var userName = prompt('Hi, what is your name?');
console.log('user\s name is ' + userName)
alert('Hello ' + userName + '! Let\'s play a Game.');

var city = prompt('Do you think I live in Seattle? (y/n)').toLowerCase();
console.log('For city, user entered: ' + city);
if (city === 'y') {
  alert('Yes I do live in Seattle!');
} else if (city === 'n') {
  alert('Sorry you are incorrect.');
} else {
  alert('Please enter y or n');
}

var pets = prompt('Do I have any pets? (Y/N)').toUpperCase();
console.log('For pets, user entered: ' + pets);
if (pets === 'Y') {
  alert('Yes, I have a dog named Whiskey!');
} else if (pets === 'N') {
  alert('Sorry you are incorrect. I have a dog.');
} else {
  alert('Please enter Y or N');
}

var car = prompt('Do I drive an awesome car? (YES/NO)').toUpperCase();
console.log('For car, user entered: ' + car);
if (car === 'YES') {
  alert('Yes, I have a Honda Civic!');
} else if (car === 'NO') {
  alert('Sorry you guessed wrong.');
} else {
  alert('Please enter YES or NO');
}

var veg = prompt('Am I a vegetarian? (yes/no)').toLowerCase();
console.log('For veg, user entered: ' + veg);
if (veg === 'yes') {
  alert('Nope! I love me some meat!');
} else if (veg === 'no') {
  alert('Ding! Ding! Ding! We have a winner!');
} else {
  alert('Please enter yes or no');
}

var cf = prompt('Do I love Code Fellows? (y/n)').toLowerCase();
console.log('For CF, user entered: ' + cf);
if (cf === 'y') {
  alert('Yes, of course I love Code Fellows!');
} else if (cf === 'n') {
  alert('Is that your final answer?');
} else {
  alert('Please enter y or n');
}

var favNumber = 7, counter = 0, flag = false;
do {
  var numGuess = parseInt(prompt('What do you think my favorite number is? You will have 4 guesses.'));
  counter++;
  if (numGuess === favNumber) {
    alert('Good guess! You got it!');
    flag = true;
  } else if (counter > 3) {
    alert('Sorry, you are out of guesses.');
    flag = true;
  } else if (numGuess > favNumber) {
    alert('Sorry, your guess is too high. Try again.');
  } else {
    alert('Sorry, your guess is too low. Try again.')
  }
} while (flag === false);