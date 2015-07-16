import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('author', {async: true}),
  title: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  votes: DS.attr('number')
})