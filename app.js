'use strict';

var showAllPix = [];

var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg'];

var Sale = function(name, pixPath) {
  this.name = name;
  this.path = pixPath;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

function randomProduct() {
  for (var i = 0; i <= pixPath.length; i++) {
    var randomPic = Math.floor(Math.random() * pixPath.length);
    var makeImg = document.createElement('img');
    var getSource = document.getElementById('product1');
    makeImg.getSource = pixPath[i];
    getSource.appendChild(makeImg);
    document.getElementById('product1').getSource = pixPath[randomPic];
    console.log(pixPath[randomPic]);
  }
}

randomProduct();
// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet

new Sale('bag', pixPath);
new Sale('banana', 'img/banana.jpg');
new Sale('bathroom', 'img/bathroom.jpg');
