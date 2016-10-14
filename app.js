'use strict';

function Photo(name, path) {
  this.name = name;
  this.path = path;
  this.vote = 0;
  this.totalVotes = 0;
  this.pixArray = ['img/bag.jpg', 'img/pen.jpg', 'img/usb.jpg'];
};

var photoTest = {
  name: name,
  href: 'img/bag.jpg',
  vote: 0,
  totalVotes: 0,
  pixArray: ['img/bag.jpg', 'img/pen.jpg', 'img/usb.jpg'],

  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  //random number generator method
  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },

  showPics: function(){
    for (var i = 0; i < 2; i++){
      console.log('Hello!');
    }//testing
  },
};

photoTest.showPics();
// Photo();
