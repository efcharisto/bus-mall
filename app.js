'use strict';

var showAllPix = [];

// var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg'];

var Sale = function(name, pixPath) {
  this.name = name;
  this.pixPath = pixPath;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

new Sale('bag', 'img/bag.jpg'); //not working yet, to be used later
new Sale('banana', 'img/banana.jpg');
new Sale('bathroom', 'img/bathroom.jpg');
new Sale('boots', 'img/boots.jpg');
new Sale('breakfast', 'img/breakfast.jpg');
new Sale('bubblegum', 'img/bubblegum.jpg');
new Sale('cthulhu', 'img/cthulhu.jpg');
new Sale('chair', 'img/chair.jpg');
new Sale('dog-duck', 'img/dog-duck.jpg');
new Sale('dragon', 'img/dragon.jpg');

function randomNum(){
  return Math.floor(Math.random() * showAllPix.length);
}

var numberOne = randomNum();
var numberTwo = randomNum();
var numberThree = randomNum();
//get 3 different random numbers first and then focus on the rest
function randomizer(){
  //var randomNum = Math.floor(Math.random() * showAllPix.length);
  while (numberTwo === numberOne){
    numberTwo = randomNum();
    console.log(numberTwo + ' is num 2 and ' + numberOne + ' is num 1.');
  }

  while (numberThree === numberTwo || numberThree === numberOne){
    numberThree = randomNum();
    console.log(numberThree + ' is num 3 and ' + numberTwo + ' is num 2.');
  }
}
randomizer();

function randomProducts() {
  var product1 = document.getElementById('product1');
  product1.src = showAllPix[numberOne].pixPath;

  var product2 = document.getElementById('product2');
  product2.src = showAllPix[numberTwo].pixPath;

  var product3 = document.getElementById('product3');
  product3.src = showAllPix[numberThree].pixPath;
  // }
}

// function randomProduct2() {
//   // for (var i = 0; i < showAllPix.length; i++) {
//   var randomNum = Math.floor(Math.random() * showAllPix.length);
//   //get 3 different random numbers first and then focus on the rest
//   var product2 = document.getElementById('product2');
//   product2.src = showAllPix[randomNum].pixPath;
//   // }
// }
//
// function randomProduct3() {
//   // for (var i = 0; i < showAllPix.length; i++) {
//   var randomNum = Math.floor(Math.random() * showAllPix.length);
//   //get 3 different random numbers first and then focus on the rest
//   var product3 = document.getElementById('product3');
//   product3.src = showAllPix[randomNum].pixPath;
//   // }
// }


randomProducts();

// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet
