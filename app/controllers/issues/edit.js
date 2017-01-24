import Ember from 'ember';

export default Ember.Controller.extend({
  github: Ember.inject.service('github'),
  api_communication: Ember.inject.service('apiCommunication')
});
