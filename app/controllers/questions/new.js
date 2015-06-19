import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date')
      });
      newQuestion.save();
      this.setProperties({
        name: '',
        title: '',
        body: '',
        date: ''
              });






      this.transitionToRoute('questions');
    }
  }
});
