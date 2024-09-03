/*code 1 -- while loop
var counter = 0;

function randomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while (counter < 10) {
  var random = randomNumber (6);
  document.write (`${random} `);
  counter += 1;
}*/

/*code 2
var randomNumber = getRandomNumber(upper);
var upper = 10;
var guess;
var attempt = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
   guess = getRandomNumber(upper);
   attempt += 1;
}

document.write (`<p>The random number was ${randomNumber}</p>`);
document.write (`<p>It took the computer ${attempt} number of attempts to get it right</p>`);*/

/*code 3 -- do.while
var randomNumber = getRandomNumber(10);
var guess;
var guesscount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

do {
  guess = prompt(`Think of a number between 1 and 10.`);
  guesscount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess)
document.write(`<p>Correct! You made the right guess after ${guesscount} amount of time... The right number is ${guess}</p>`)*/

/*code 4 -- for loop
var html = '';

for (var counter = 1; counter <= 10; counter += 1) {
  //html += `<div>${counter} </div>`;
  html += `${counter} `;
}
document.write(html);*/

/*code 5 -- code break
var randomNumber = getRandomNumber(10);
var guess;
var guesscount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while ( guesscount < 5 ) {
  guess = prompt(`Think of a number between 1 and 10.`);
  guesscount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}
if ( correctGuess ) {
  document.write(`<p>Correct! You made the right guess after ${guesscount} amount of time... The right number is ${guess}</p>`)
} else {
  document.write (`Sorry. Try again later!!!`)
}*/

/*Code Challenge ---------- Pending
html = '';
counter = 1;

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  var color = `rgb(`;
  color += randomRGB() `,`;
  color += randomRGB() `,`;
  color += randomRGB() `)`;
}

while (counter <= 10) {
  var rgbColor = randomColor();
  //var rgbColor = `rgb ( ${red}, ${green}, ${blue} )`;
  html += `<div style = "background-color: '${rgbColor}'";>` `</div>`;
  counter += 1;
}

document.write(html);
console.log(rgbColor);*/

/*code 6 -- Creating an Array  
var myCourseCode = [
  'Mls 301', 
  'Mls 303', 
  'Mls 305', 
  'Mls 307', 
  'Mls 311', 
  'Mls 313',
  'Mls 309'
];

console.log(myCourseCode);
console.log(myCourseCode[0]);
console.log(myCourseCode[4]);
console.log(myCourseCode[6]);
alert (myCourseCode[0]);*/

/*code 7
var myCourseCode = [
  'Mls 301', 
  'Mls 303', 
  'Mls 305', 
  'Mls 307', 
  'Mls 311', 
  'Mls 313',
  'Mls 309'
];

myCourseCode[ myCourseCode.length ] = 'Mls 315';
myCourseCode.push('Mls 317', 'Mls 319');
myCourseCode.unshift('Mls 300');
myCourseCode.unshift('Mls 200', 'Mls 250')
console.log(myCourseCode);
console.log(myCourseCode.length);*/

/*code 8
var myCourseCode = [
  'Mls 301', 
  'Mls 303', 
  'Mls 305', 
  'Mls 307', 
  'Mls 311', 
  'Mls 313',
  'Mls 309'
];

for (var i = 0; i < myCourseCode.length; i += 1 ) {
  console.log(myCourseCode[i]);
  document.write(myCourseCode[i]);
}
*/

/*Code 9 -- Array methods
var myCourseCode = [
  'Mls 301', 
  'Mls 303', 
  'Mls 305', 
  'Mls 307', 
  'Mls 311', 
  'Mls 313',
  'Mls 309'
];

var secondCourseCode = [
  'Mls 302',
  'Mls 304',
  'Mls 306',
  'Mls 308',
  'Mls 310',
  'Mls 312',
  'Mls 314'
];

//var courseList = myCourseCode.join('; ');
//console.log(courseList);
console.log(myCourseCode.join('; '));
//document.write(myCourseCode.join(', '));

var allCourses = myCourseCode.concat(secondCourseCode);
console.log(allCourses);
document.write(allCourses.join('; '))

console.log(myCourseCode.indexOf('Mls 307'));*/

/*Code 10 -- Code Challenge
var inStock = [
  'apple',
  'pineapple',
  'grape',
  'milk',
  'potato',
  'pizza',
  'cookie',
  'broccoli',
  'cucumber',
  'cheese',
  'bread',
];
var search;

function print(message) {
  document.write(`<p>${message}</p>`)
}

while (true) {
  search = prompt("Search for a product in our store. Type 'list' to show all of the product and 'quit' to exit");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(inStock.join(', '));
    break
  } else {
    if (inStock.indexOf(search) > -1) {
      print(`Yes , we have ${search} in the store.`);
    } else {
      print(`${search} is not in stock.`);
    }
  }
}*/

/*Code 11 -- Two dimensional array
var multiArray = [
  ['Mls 301', 'Mls 303','Mls 305', 'Mls 307', 'Mls 311', 'Mls 313','Mls 309'],
  ['Mls 302','Mls 304','Mls 306','Mls 308','Mls 310','Mls 312','Mls 314'],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['apple','pineapple','grape','milk','potato','pizza','cookie','broccoli']
];

console.log(multiArray[0][2])*/

/*Code 12 -- Challenge
var Playlist = [
  ['I did it my way', 'Frank Sinatra'],
  ['Respect', 'Arethra Franklin'],
  ['City Of God', 'Dunsin Oyekan'],
  ['Do to me what you want', 'Dunsin Oyekan'],
  ['Undignified', 'Dunsin Oyekan'],
  ['Cheap Thrills', 'Sia'],
  ['Never Give Up', 'Sia']
];

function print(message) {
  document.write(message);
}

function printSong(songs) {
  var listHtml = `<ol>`;
  for (var i = 0; i < songs.length; i += 1) {
    listHtml += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    //listHtml += `<li> songs${i} </li>`;
  }
  listHtml += `</ol>`;
  print(listHtml);
}

printSong(Playlist);*/

/*Code 13 -- Quiz challenge
var quizQuestions = [
  ['How many continents are in the world', 7],
  ['How many local government do we have in Nigeria', 774],
  ['How old is Nigeria', 54]
]
var correctGuess = 0;
var wrongGuess = 0;
var correctAnswer = [];
var wrongAnswer = [];
var question;
var answer;
var response;
var html;

function print(questions) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = questions;
}

function buildList(arr) {
  var listHtml = `<ol>`;
  for (var i = 0; i < arr.length; i += 1) {
    listHtml += '<li>' + arr + '</li>';
    listHtml += `</ol>`;
    print(listHtml);
  }
}

for (var i = 0; i < quizQuestions.length; i += 1) {
  question = quizQuestions[i][0];
  answer = quizQuestions[i][1];
  response = prompt(question);
  response = parseInt(response);
  var listHtml = `<ol>`;
  if (response === answer) {
    correctGuess += 1
    correctAnswer += quizQuestions[i][0]
    //correctAnswer.push(question);
  }  else {
    //wrongAnswer.push(question);
  }
  print(listHtml);
}

html = `You got ${correctGuess} question(s) correct`;
print(html);*/

/*Code 14 -- Object Literal
var personalDetails = {
  name: 'Enoch',
  country: 'Nigeria',
  school: 'FUOYE',
  age: 20,
  christian: true,
  skills: ['HTML', 'CSS', 'Javascript']
}

console.log(personalDetails.name);
personalDetails.age = 30;
personalDetails.snack = 'Groundnut';
console.log(personalDetails)

//Object is like a package of variables. Its a collection of data and variables stored in the object. It help group related data in an singly accessible package*/

/*Code 15
var personalDetails = {
  name: 'Enoch',
  country: 'Nigeria',
  school: 'FUOYE',
  age: 20,
  christian: true,
  skills: ['HTML', 'CSS', 'Javascript']
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var message = `<p>Hello, my name is ${personalDetails.name} and I am ${personalDetails.age} years old. I am a citizen of ${personalDetails.country}</p>`;
personalDetails.name = 'Ebenezer';
message += `<p>I have a younger brother who goes by the name ${personalDetails.name}</p>`;
var assumption= parseInt(prompt('Pick a number between 1 and 10'));
personalDetails.age += assumption;
message += `<p>In the next ${assumption}, I will be ${personalDetails.age} years old</p>`;
message += `<p>I have a total ${personalDetails.skills.length} developing skills. They are ${personalDetails.skills.join(', ')}</p>`;
print(message)*/

/*Code 16 -- For in loop
var personalDetails = {
  name: 'Enoch',
  country: 'Nigeria',
  school: 'FUOYE',
  age: 20,
  christian: true,
  skills: ['HTML', 'CSS', 'Javascript']
}

for (key in personalDetails) {
  //console.log(personalDetails[key])
  console.log(key, ':', personalDetails[key])
}*/

/*Code 17 -- Quiz challenge
var quizQuestions = [
  {question: 'How many continents are in the world', answer: 7},
  {question: 'How many local government do we have in Nigeria', answer: 774},
  {question: 'How old is Nigeria', answer: 54}
]
var correctGuess = 0;
var wrongGuess = 0;
var correctAnswer = [];
var wrongAnswer = [];
var question;
var answer;
var response;
var html;

function print(questions) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = questions;
}


for (var i = 0; i < quizQuestions.length; i += 1) {
  question = quizQuestions[i].question;
  answer = quizQuestions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  var listHtml = `<ol>`;
  if (response === answer) {
    correctGuess += 1
    correctAnswer += quizQuestions[i].answer;
  }
  print(listHtml);
}

html = `You got ${correctGuess} question(s) correct`;
print(html);*/

/*Code 18
var personalDetails = {
  name: 'Enoch',
  country: 'Nigeria',
  school: 'FUOYE',
  age: 20,
  christian: true,
  skills: ['HTML', ' CSS', ' Javascript'],
  "family name" : 'Aderemi'
}
/*for (key in personalDetails) {
  //console.log(personalDetails[key])
  console.log(key, ':', personalDetails[key])
}
let key = prompt("What detail do you need about this person?");

alert(personalDetails[key]);
document.write(personalDetails[key]);*/

/*let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name", "age");

// access by variable
alert( user[key] ); // John (if enter "name")*/

//Challenge 1
var message = "";
var student;

var students = [
  {
    name: "John",
    track: "HTML",
    achievement: 5,
    points: 50,
  },
  {
    name: "James",
    track: "CSS",
    achievement: 6,
    points: 30,
  },
  {
    name: "Agboola",
    track: "JavaScript",
    achievement: 3,
    points: 20,
  },
  {
    name: "Enoch",
    track: "Web Dvelopment",
    achievement: 8,
    points: 80,
  },
  {
    name: "Ebenezer",
    track: "Graphics Designer",
    achievement: 6,
    points: 40,
  },
];

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += `<h2>Student: ${student.name}</h2>`;
  message += `<p>Track: ${student.track}</p>`;
  message += `<p>Achievement: ${student.achievement}</p>`;
  message += `<p>Points: ${student.points}</p>`;
}

print(message);

/*Challenge 2
var message = "";
var student;
var search;

var students = [
  {
    name: "JOHN",
    track: "HTML",
    achievement: 5,
    points: 50,
  },
  {
    name: "JAMES",
    track: "CSS",
    achievement: 6,
    points: 30,
  },
  {
    name: "AGBOOLA",
    track: "JavaScript",
    achievement: 3,
    points: 20,
  },
  {
    name: "ENOCH",
    track: "Web Dvelopment",
    achievement: 8,
    points: 80,
  },
  {
    name: "EBENEZER",
    track: "Graphics Designer",
    achievement: 6,
    points: 40,
  },
];

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = `<h2>Student: ${student.name}</h2>`;
  report += `<p>Track: ${student.track}</p>`;
  report += `<p>Achievement: ${student.achievement}</p>`;
  report += `<p>Points: ${student.points}</p>`;
  return report;
}

while (true) {
  search = prompt(
    "What Student are you looking for? (Type 'quit' to exit the loop)"
  );
  if (search === null || search.toLowerCase() === "quit") {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name === search.toUpperCase()) {
      message = getStudentReport(student);
      print(message);
    } 
  }
}*/

/*while (true) {
  search = prompt(
    "Search for a product in our store. Type 'list' to show all available items and 'quit' to exit"
  );
  search = search.toLowerCase();
  if (search === "quit") {
    break;
  } else if (search === "list") {
    print(inStock.join(", "));
    break;
  } else {
    if (inStock.indexOf(search) > -1) {
      print(`Yes , we have ${search} in the store.`);
    } else {
      print(`${search} is not in stock.`);
    }
  }
}*/
