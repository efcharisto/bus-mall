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

// //global counter for all clicks. stop counting
// show results,
// display totalVotes with graph for each images

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
var numberOne;
var numberTwo;
var numberThree;

function randomizer(){
  //random numbers to be assigned to each image
  numberOne = randomNum();
  numberTwo = randomNum();
  numberThree = randomNum();

  while (numberTwo === numberOne){
    numberTwo = randomNum();
  }
  while (numberThree === numberTwo || numberThree === numberOne){
    numberThree = randomNum();
  }
}

//DOM: gets each product by element to set source to
//unique random values from all pix array
function randomProducts() {
  randomizer(); // ^
  var product1 = document.getElementById('product1');
  product1.src = showAllPix[numberOne].pixPath;
  product1.name = showAllPix[numberOne].name;

  var product2 = document.getElementById('product2');
  product2.src = showAllPix[numberTwo].pixPath;
  product2.name = showAllPix[numberTwo].name;

  var product3 = document.getElementById('product3');
  product3.src = showAllPix[numberThree].pixPath;
  product3.name = showAllPix[numberThree].name;
}
randomProducts();

// // get name from event.target
// product1.name = showAllPix[i].name;
// // look through all the objects in the array
//
// // check whether this object's name property matches event.target.name
// if(product1.name = event.target){
//   product1.vote += 1;
// }
// // if yes, count vote
// //re-render
document.getElementById('merch').addEventListener('click', function(event) {
  for (var i = 0; i < showAllPix.length; i++){
    if(event.target.name === showAllPix[i].name) {
      showAllPix[i].vote += 1;
      console.log(showAllPix[i].vote);
    }
  }
  randomProducts();
});

// document.getElementById('space between pix').addEventListener('click', function(){ alert("Click right on one of the images please"); });

// document.getElementById('merch').addEventListener('click', function again(){
//   randomProducts();
// });
