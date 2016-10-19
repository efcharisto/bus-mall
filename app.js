'use strict';


function Sale(name, path) {
  this.name = name;
  this.location = path;
  this.vote = 0;
  this.totalVotes = 0;

  this.showAllPix = new Array();
  var pixPath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg'];

  function randomProduct() {
    var img = document.createElement('img');
    img.src = pixPath[randomPic];
    var src = document.getElementById('product1');
    src.appendChild(img);
    for (var i = 0; i <= pixPath.length; i++) {
      var randomPic = Math.floor((Math.random() * pixPath.length));;
      //  this.showAllPix.push(path);
      document.getElementById('product1').src = pixPath[randomPic];
    }
  }
  randomProduct();
  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },

  // for (var i = 0; i <= pixPath.length; i++) {
  //   this.push(showAllPix); } not working yet
};

new Sale('bag', 'img/bag.jpg');
