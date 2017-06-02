import Ember from 'ember';

var questions = [{
  question: "What's the best programming language?",
  author: "Ben Williams",
  note: "Aspiring Ruby Dev",
},

export default Ember.Route.extend({
  model(){
    return questions;
  }

});
