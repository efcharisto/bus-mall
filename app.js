'use strict';

var showAllPix = [];

var Sale = function(name, path) {
  this.name = name;
  this.path = path;
  this.vote = 0;
  this.totalVotes = 0;
  showAllPix.push(this);
};

function randomProduct() {
  var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg'];
  var img = document.createElement('img');
  img.src = pixPath[i];
  var src = document.getElementById('product1');
  src.appendChild(img);
  for (var i = 0; i <= pixPath.length; i++) {
    var randomPic = Math.floor((Math.random() * pixPath.length));
    //round a random value taken from array several times(arr length)
    //this.showAllPix.push(path);
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
