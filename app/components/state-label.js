import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: Ember.computed('state', function() {
    return this.get('state') == 'open';
  })
});
