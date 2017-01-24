import Ember from 'ember';

export default Ember.Route.extend({
  api_communication: Ember.inject.service('apiCommunication'),
  session: Ember.inject.service('github'),
  model: function(params) {
    return this.store.find('issue', params.number);
  }
});
