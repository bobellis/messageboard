Messageboard.Question = DS.Model.extend({
  author: DS.attr(),
  questionText: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
