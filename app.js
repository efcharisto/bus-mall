'use strict';

var showAllPix = [];

//var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg'];

var Sale = function(name, pixPath) {
  this.name = name;
  this.pixPath = pixPath;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

new Sale('bag', 'img/bag.jpg'); //manual call for each instance
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
//making sure that all 3 random images are different
var numberOne = randomNum();
var numberTwo = randomNum();
var numberThree = randomNum();

function randomizer(){
  //random numbers to be assigned to each image
  while (numberTwo === numberOne){
    numberTwo = randomNum();
  }
  while (numberThree === numberTwo || numberThree === numberOne){
    numberThree = randomNum();
  }
}
randomizer(); // ^

//DOM: gets each product by element to set source to
//unique random values from all pix array
function randomProducts() {
  var product1 = document.getElementById('product1');
  product1.src = showAllPix[numberOne].pixPath;
  product1.name = showAllPix[numberOne].name;

  var product2 = document.getElementById('product2');
  product2.src = showAllPix[numberTwo].pixPath;

  var product3 = document.getElementById('product3');
  product3.src = showAllPix[numberThree].pixPath;
}
randomProducts();

document.getElementById('merch').addEventListener('click', function(event) {
  console.log(event.target.id);
  // get name from event.target
  // look through all the objects in the array
    // check whether this object's name property matches event.target.name
    // if yes, count vote
  //re-render
});

// document.getElementById('space between pix').addEventListener('click', function(){ alert("Click right on one of the images please"); });

// document.getElementById('merch').addEventListener('click', function again(){
//   randomProducts();
// });
