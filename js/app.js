'use strict';

var userName = prompt('Hi, what is your name?');
console.log('user\s name is ' + userName)
alert('Hello ' + userName + '! Let\'s play a Game');

var city = prompt('Do you think I live in Seattle? (y/n)').toLowerCase();
console.log('For city, user entered: ' + city);
if (city === 'y') {
  alert('Yes I do live in Seattle!');
} else if (city === 'n') {
  alert('Sorry you are incorrect');
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