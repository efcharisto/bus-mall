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

function randomizer(){
  var numberOne = Math.floor(Math.random() * showAllPix.length);
  var numberTwo = Math.floor(Math.random() * showAllPix.length);
  var numberThree = Math.floor(Math.random() * showAllPix.length);
  var randomNum = Math.floor(Math.random() * showAllPix.length);
  do {
    randomNum = Math.floor(Math.random() * showAllPix.length);
  } while(numberTwo === numberThree || numberTwo === numberOne);
  console.log(randomNum);
}
// randomizer();

function randomProduct1() {
  // for (var i = 0; i < showAllPix.length; i++) {
  var randomNum = Math.floor(Math.random() * showAllPix.length);
  //get 3 different random numbers first and then focus on the rest
  var product1 = document.getElementById('product1');
  product1.src = showAllPix[randomNum].pixPath;
  // }
}

function randomProduct2() {
  // for (var i = 0; i < showAllPix.length; i++) {
  var randomNum = Math.floor(Math.random() * showAllPix.length);
  //get 3 different random numbers first and then focus on the rest
  var product2 = document.getElementById('product2');
  product2.src = showAllPix[randomNum].pixPath;
  // }
}

function randomProduct3() {
  // for (var i = 0; i < showAllPix.length; i++) {
  var randomNum = Math.floor(Math.random() * showAllPix.length);
  //get 3 different random numbers first and then focus on the rest
  var product3 = document.getElementById('product3');
  product3.src = showAllPix[randomNum].pixPath;
  // }
}

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
randomProduct1();
randomProduct2();
randomProduct3();

// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet
