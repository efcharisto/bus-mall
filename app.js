'use strict';


function Sale(name, path) {
  this.name = name;
  this.location = path;
  this.vote = 0;
  this.totalVotes = 0;
  this.showAllPix = new Array();
  this.pixPath = new Array('img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg');

  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },

  pushNames: function() {
    for (var i = 0; i <= this.pixPath.length; i++) {

      var path = this.pixPath[i]
      return Math.floor(Math.random() * (3 - 0 + 1) + min);
      this.showAllPix.push(path);
    }
  },

  // for (var i = 0; i <= pixPath.length; i++) {
  //   this.push(showAllPix); } not working yet

};

//trying to display 1 img using DOM. Got help here
// http://stackoverflow.com/questions/2735881/adding-images-to-the-html-with-javascript
function domStuff() {
  var img = document.createElement('img');
  img.src = 'img/bag.jpg';
  var src = document.getElementById('product1');
  src.appendChild(img);
}

//var firstSale = new Sale('banana', 'img/banana.jpg');
domStuff();
