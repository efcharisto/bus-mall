'use strict';

var showAllPix = new Array();

function Photo(name, path, vote) {
  this.name = name;
  this.location = path;
  this.vote = 0;
  this.totalVotes = 0;

  var pixArray = new Array('img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg');

  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },

  //   showPics: function() { //unexpected token (  what?..
  //     for (var i = 0; i < 2; i++){
  //       console.log('Hello!');
  //     }
  //   },
};

//trying to display 1 img using DOM.
//got help here
// http://stackoverflow.com/questions/2735881/adding-images-to-the-html-with-javascript
function domStuff() {
  var img = document.createElement('img');
  img.src = 'http://www.boxmaker.com/wp-content/uploads/2015/12/seattle-icon.png';
  var src = document.getElementById('products');
  src.appendChild(img);
}

domStuff();

//random number generator method
// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },
