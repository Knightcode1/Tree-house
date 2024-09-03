/*code 1
console.log("Start");
alert ('Hello World');
document.write('<h1>Welcome to Javascript basis<h1/>');
alert ('Thanks for Visiting');
console.log("The Lord is my Strength"); 
console.log("Stop");*/

/*code 2
var message = "Be Blessed";
alert(message);
message = "Hello from Enoch";
alert(message);
message = "He's name is Enoch";
alert(message);*/

/*code3
var visitorname = prompt("What is your name");
alert (visitorname);
var message = `Hello ${visitorname}`;
message = `${message}. We are happy to see you. We are glad you visited. God bless you mightily. Hope to see you again.`;
document.write(message);
console.log(visitorname);*/

/*code 4
var catchphrase = 'Hello By Enoch';
console.log (catchphrase.length)
console.log (catchphrase.toLowerCase());
console.log (catchphrase);
console.log (catchphrase.toUpperCase());*/

/*Shout App
var stringToShout = prompt("What Should I Shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";
alert (shout);*/

/*The story maker game1
var question1 = prompt('What is your name?');
//var question2 = prompt('What are your dreams?');
var question3 = prompt('Who is your drive?');
var question4 = prompt('How do you see Life?');
alert ('You are done!!!');
document.write ('<h1>A short introduction about myself</h1>');
document.write (`I am ${question1}. My source of motivation is ${question3}. Life is ${question4}`);
// + '. I wish ' + question2*/

/*The story maker game
var question = 4;
var questionLest = `[${question} questions remaining]`;
document.write("<h1>This is a short story</h1>");
var adjective = prompt(`What is your gender? ${questionLest}`);
question -= 1;
questionLest = `[${question} questions remaining]`;
var verb = prompt(`what do you like doing? ${questionLest}`);
question -= 1;
questionLest = `[${question} questions remaining]`;
var noun1 = prompt(`What is your name? ${questionLest}`);
question -= 1;
questionLest = `[${question} more question]`;
var noun2 = prompt(`Where do you Live? ${questionLest}`);
alert("All done!!!");

document.write(
  `This story is about a ${adjective}, who was good at ${verb}. His name is ${noun1}, and he resides in the city of ${noun2}`
);*/

/*code 5
var secondsPerMin = 60;
var minPerHour = 60;
var hourPerDay = 24;
var dayPerWeek = 7;
var weekPerYear = 52;
var secondsperDay = secondsPerMin * minPerHour * hourPerDay;
document.write ('There are ' + secondsperDay + ' seconds in A day. ')
console.log (secondsperDay)
var yearsAlive = prompt('How old are you?');
var X = secondsperDay * dayPerWeek * weekPerYear * parseInt(yearsAlive);
document.write ('I have lived for approximately ' + X + ' seconds');
console.log (X);*/

/*code 6
var test = prompt('What is your age?');
document.write(parseFloat(test) + 20);*/

/*code 7
alert(`Jesus Is Lord`.toUpperCase());
console.log(Math.round(23.6));
var dieRoll = (Math.floor(Math.random() * 6) + 1 );
console.log(dieRoll);
document.write(dieRoll)
alert(`You roll a number ${dieRoll}`);*/

/*Number challenge 1
var input = prompt("Type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
document.write (`Your lucky number is a number between 1 and ${topNumber}.Your number is ${randomNumber}`);
console.log (topNumber);*/

/*Number challenge 2
var input1 = prompt('Please, type a number');
var input2 = prompt('Please, type another number');
var bottomNumber = parseInt(input1);
var topNumber = parseInt(input2);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1) + bottomNumber);
document.write (`You're a lucky man! You have been gifted a number between ${bottomNumber} and ${topNumber}.`);
document.write (`The number is ${randomNumber}.`);*/

/*code 8
var answer = prompt('What is the name of our President?')
if (answer.toUpperCase() === 'TINUBU') {
    document.write ('<h4>Thats Correct!!!</h4>')
} else {
  document.write ('<h4>That is not right!!!</h4>')
}*/

/*code 9 --- The number guessing game
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log (randomNumber);
var guess = prompt('Roll a die and guess the number you are getting')
if (parseInt(guess) === randomNumber) {
  document.write ('<h4>Thats Correct!!!</h4>')
} else {
  document.write (`<h4>Opps, that was close!... The Number was ${randomNumber}</h4>`)
}*/

/*code 10 --- Boolean
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Roll a die and guess the number you are getting");
console.log (randomNumber);
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
}

if (correctGuess) {
  document.write("<h4>Thats Correct!!!</h4>");
} else {
  document.write(
    `<h4>Opps, that was close!... The Number was ${randomNumber}</h4>`
  );
}*/

/*code 11 -- Random number game with a chance to reddem id too high or too low
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Roll a die and guess the number you are getting");
console.log(randomNumber);
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt(
    `Try again.! The die number you got is more than ${guess}`
  );

  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} 
  else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt(`Try again. The die number you got is less than ${guess}`);
    if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
    }
}

if (correctGuess) {
  document.write("<h4>Thats Correct!!!</h4>");
} else {
  document.write(
    `<h4>Opps, that was close!... The Die number was ${randomNumber}</h4>`
  );
}*/

/* The condition challenge
var correctAnswer = parseInt(0);
var question1 = prompt("How many continents are in the world?");
if (parseInt(question1) === 7) {
  correctAnswer += 1;
} else {
  correctAnswer = correctAnswer;
}
console.log(correctAnswer);

var question2 = prompt("Is Nigeria a republic? Y/N");
if (question2.toUpperCase() === "YES" || question2.toUpperCase() === "Y") {
  correctAnswer += 1;
} else {
  correctAnswer = correctAnswer;
}
console.log(correctAnswer);

var question3 = prompt("How many local government in Nigeria?");
if (parseInt(question3) === 774) {
  correctAnswer += 1;
} else {
  correctAnswer = correctAnswer;
}
console.log(correctAnswer);

var question4 = prompt("What is the first name of the richest man in Nigeria?");
if (question4.toUpperCase() === 'DANGOTE') {
  correctAnswer += 1;
} else {
  correctAnswer = correctAnswer;
}
console.log(correctAnswer);

var question5 = prompt("What is the most used social media?")
if (question5.toUpperCase() === 'WHATSAPP') {
  correctAnswer += 1;
} else {
  correctAnswer = correctAnswer;
}
console.log(correctAnswer);

if (correctAnswer === 5) {
  document.write(`<h1>Congratulations, you have won a GOLD medal! Your final score is ${correctAnswer}</h1>`);
} else if (correctAnswer >= 3) {
  document.write(`<h2>Good Job, You have won a SILVER medal! Your final score is ${correctAnswer}</h2>`);
} else if (correctAnswer >= 1) {
  document.write(`<h2>Nice Try, You have won a BRONZE medal! Your final score is ${correctAnswer}</h2>`);
} else {
  document.write(`Better Luck Next time! Your final score is ${correctAnswer}</h2>`);
}*/

/*code 12
//This is known as a "Named Function" and it is the primary way to write a function
function alertRandom() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}
alertRandom();
alertRandom();

// This is another way of writing a function and it is known as "A Function Expression" -- this is not usually used
var alertRandom = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
};
alertRandom();

//This is known as an "Arrow Function"
var alertRandom = () => {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
};
alertRandom();
alertRandom();

//This are the 3 ways to write a function but the best way to express a function is the "Named Function"*/

/*Code 13 - A random number is returned to be used in various ways
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
alert(getRandomNumber());
console.log (getRandomNumber());
var dieRoll = getRandomNumber() ;*/

/*function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
    return false
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert('Please provide your email address')
}*/

/* Code 14
function whatIsYourName(name) {
  alert(name + ' is my name!')
}
//whatIsYourName('Enoch');
//whatIsYourName('Ebenezer'); 

function getRandomNumber(upper) {
  var randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}

console.log (getRandomNumber(200));
console.log(getRandomNumber(28));
console.log(getRandomNumber(1888));
alert(getRandomNumber(50));

function getArea (width, length, unit) {
  var area = width * length
  return area + " " + unit;
}
console.log (getArea(10, 20, 'sq ft'));*/

/*code 15 - My practice exercise
function square(number) {
  var multiplication = number * number;
  return multiplication;
}
var digit = prompt('Input a number!');
console.log (square(digit));*/

/*function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]*/

/* Code 16 - Random number generator
function randomNumber(lower, upper) {
  if (isNaN(lower) || isNaN(upper)) {
    throw new Error('Invalid Input, type a number!!!');
  }
  var numberGenerator = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return numberGenerator;
}


//var lowerNumber = prompt ('Input a small number');
//var upperNumber = prompt ('Input a big number');
console.log(randomNumber(10, 25));
console.log(randomNumber(15, 100));
console.log(randomNumber('two', 15));
console.log(randomNumber(12, 40));
//console.log(randomNumber(lowerNumber, upperNumber));*/
