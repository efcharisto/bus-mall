'use strict';

var showAllPix = new Array();

function Photo(name, path) {
  this.name = name;
  this.location = path;
  this.vote = 0;
  this.totalVotes = 0;

  var pixArray = new Array('img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg');

  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },

  showPics: function() { //unexpected token (  what?..
    for (var i = 0; i < 2; i++){
      console.log('Hello!');
    }
  },
};

//random number generator method
// randomNum: function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },

var pic = new Photo('bag', 'img/bag.jpg');
// Photo();
