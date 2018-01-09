'use strict';

var userName = prompt('Hi, what is your name?');
alert('Hello ' + userName + '! Let\'s play a Game');

var city = prompt('Do you think I live in Seattle? (y/n)').toLowerCase();
if (city === 'y') {
  alert('Yes I do live in Seattle!');
} else if (city === 'n') {
  alert('Sorry you are incorrect');
} else {
  alert('Please enter y or n');
}

var pets = prompt('Do I have any pets? (Y/N)').toUpperCase();
if (pets === 'Y') {
  alert('Yes, I have a dog named Whiskey!');
} else if (pets === 'N') {
  alert('Sorry you are incorrect. I have a dog.');
} else {
  alert('Please enter Y or N');
}