Messageboard.NewAnswerRoute = Ember.Route.extend({
  model: function(params) {
    var question = this.modelFor('question');
    var newAnswer = this.store.createRecord('answer');
    newAnswer.answerText = this.get('answerText');
    question.get('answers').then(function(answers) {
      answers.pushObject(newAnswer);
    });
    return newAnswer;
  }
});
