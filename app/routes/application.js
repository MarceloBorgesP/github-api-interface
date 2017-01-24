import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  actions: {
    refresh: function() {
      this.refresh();
      this.transitionTo('issues.index');
    }
  }
});
