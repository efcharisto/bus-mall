'use strict';

var showAllPix = [];

var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg'];

var Sale = function(name, pixPath) {
  this.name = name;
  this.pixPath = pixPath;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

function randomProduct() {
  for (var i = 0; i <= pixPath.length; i++) {
    var randomNum = Math.floor(Math.random() * pixPath.length);
    var randomPic = pixPath[randomNum];
    var product1 = document.getElementById('product1');
    product1.src = showAllPix.pixPath[randomPic];
    //src.appendChild(product1);
    document.getElementById('product1').src = pixPath[randomPic];
    console.log(pixPath[randomPic]); //shows random paths for img but nothing displays on the page
  }
}

randomProduct();

// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet

new Sale('bag', pixPath); //not working yet, to be used later
new Sale('banana', 'img/banana.jpg');
new Sale('bathroom', 'img/bathroom.jpg');
