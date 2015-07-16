import Ember from 'ember';

var converter = new showdown.Converter()

export default Ember.Handlebars.makeBoundHelper(function(text) {
  var markup = converter.makeHtml(text)
  return markup
})