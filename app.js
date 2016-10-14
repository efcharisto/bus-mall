'use strict';

// function Photo(name, path, vote) {
//   this.name = name;
//   this.path = path;
//   this.vote = 0;
//   this.totalVotes = 0;
// }

var photos = {
  name : name,
  path : path,
  vote : 0,
  totalVotes: 0,

  randomNum: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  showPics: function(){
    for (var i=0; i < 2; i++){
      console.log("Hello!");
    }//testing
  },

}


  //random number generator method
  // randomNum: function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // },
  photo.showPic();
