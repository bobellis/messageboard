MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        questionText: this.get('questionText'),
        description: this.get('description'),
        author: this.get('author')
      });
debugger
      newQuestion.save()
      this.transitionToRoute('questions');
    }
  }
});
