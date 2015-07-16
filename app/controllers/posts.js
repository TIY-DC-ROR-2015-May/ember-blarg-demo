import Ember from 'ember'

export default Ember.ArrayController.extend({
  actions: {
    flipSort: function() { this.get('sortedList').toggleProperty('sortAscending') }
  },
  sortedList: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['votes'],
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model')
})