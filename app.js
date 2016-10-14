'use strict';

function Photo(name, path, vote) {
 this.name = name;
 this.path = path;
 this.vote = 0;
 this.totalVotes = 0;
}

//random number generator method
randomNum: function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
