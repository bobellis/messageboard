Messageboard.Answer = DS.Model.extend({
  answerText: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
