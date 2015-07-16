import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true)
    },
    doneEditing: function() {
      this.set('isEditing', false)
      this.model.save()
    },
    upvote: function() {
      var old_votes = this.model.get("votes")
      this.model.set("votes", old_votes + 1)
      this.model.save()
    },
    downvote: function() {
      var old_votes = this.model.get("votes")
      this.model.set("votes", old_votes - 1)
      this.model.save()
    }
  }
})