import Ember from 'ember';

export default Ember.Controller.extend({
  api_communication: Ember.inject.service('apiCommunication'),
  session: Ember.inject.service('github'),
  actions: {
    submit: function() {
      // Generate Basic token for GitHub credentials
      this.get('session').authenticate(this.get('identification'), this.get('password'));

      // Create new issue
      this.get('api_communication').post(this.getProperties('title','body'));
    }
  }
});
