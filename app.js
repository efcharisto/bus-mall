'use strict';

function Photo(name, path) {
  this.name = name;
  this.location = path;
  this.vote = 0;
  this.totalVotes = 0;

  var showAllPix = new Array();
  var pixPath = new Array('img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg');

  for (var i = 0; i <= pixPath.length; i++) {
    this.push(showAllPix);
  }

  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },
};

//trying to display 1 img using DOM. Got help here
// http://stackoverflow.com/questions/2735881/adding-images-to-the-html-with-javascript
function domStuff() {
  var img = document.createElement('img');
  img.src = 'img/bag.jpg';
  var src = document.getElementById('product1');
  src.appendChild(img);
}

domStuff();

//random number generator method
// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },
