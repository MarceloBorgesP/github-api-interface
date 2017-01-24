import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  github: storageFor('github'),
  init() {
    this._super();
    this.set('owner', this.get('github.owner'));
    this.set('repo', this.get('github.repo'));
  },
  actions: {
    findRepo: function() {
      var owner = this.get('owner');
      var repo = this.get('repo');
      
      this.set('github.owner', owner);
      this.set('github.repo', repo);

      this.parentView.controller.store.adapterFor('application').set('namespace', `repos/${owner}/${repo}`);
      this.parentView.controller.store.unloadAll('issue');
      this.sendAction('refresh');
    }
  }
});
