import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service('github'),
  api_communication: Ember.inject.service('apiCommunication'),
  model: function(params) {
    return this.store.find('issue', params.number);
  },
  actions: {
    submit: function(model) {
      // Generate Basic token for GitHub credentials
      this.get('github').authenticate(this.get('identification'), this.get('password'));

      model.save();
      
      this.transitionTo('issues.index');
    },
    refreshModel: function() {
      this.refresh();
    },
    lock: function(number) {
      // Generate Basic token for GitHub credentials
      var controller = this.controllerFor(this.routeName);
      var self = this;
      controller.get('github').authenticate(controller.get('identification'), controller.get('password'));

      // Lock issue
      controller.get('api_communication').lock(controller.get('model.number')).then(function() {
        controller.set('model.locked', true);
        self.transitionTo('issues.index');
      });
    },
    unlock: function(number) {
      // Generate Basic token for GitHub credentials
      var controller = this.controllerFor(this.routeName);
      var self = this;
      controller.get('github').authenticate(controller.get('identification'), controller.get('password'));

      // Lock issue
      controller.get('api_communication').unlock(controller.get('model.number')).then(function() {
        controller.set('model.locked', false);
        self.transitionTo('issues.index');
      });
    }
  }
});
