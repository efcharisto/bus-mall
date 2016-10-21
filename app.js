'use strict';

var showAllPix = [];

// var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg'];

var Sale = function(name, pixPath) {
  this.name = name;
  this.pixPath = pixPath;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

function randomProduct() {
  // for (var i = 0; i < showAllPix.length; i++) {
    var randomNum = Math.floor(Math.random() * showAllPix.length);
    var product1 = document.getElementById('product1');
    product1.src = showAllPix[randomNum].pixPath;

  // }
}

new Sale('bag', 'img/bag.jpg'); //not working yet, to be used later
new Sale('banana', 'img/banana.jpg');
new Sale('bathroom', 'img/bathroom.jpg');
randomProduct();

// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet
