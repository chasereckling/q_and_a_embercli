import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
