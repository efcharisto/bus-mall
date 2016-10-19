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
  var img = document.createElement('img');
  var src = document.getElementById('product1');
  img.src = pixPath[i];
  src.appendChild(img);
  for (var i = 0; i <= pixPath.length; i++) {
    var randomPic = Math.floor(Math.random() * pixPath.length);
    document.getElementById('product1').src = pixPath[randomPic];
  }
}

randomProduct();
// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

// for (var i = 0; i <= pixPath.length; i++) {
//   this.push(showAllPix); } not working yet

new Sale('bag', 'img/bag.jpg');
new Sale('banana', 'img/banana.jpg');
new Sale('bathroom', 'img/bathroom.jpg');
