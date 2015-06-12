MessageBoard.Question = DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMnay('answer', {async:true})
});
