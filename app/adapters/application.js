import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';
import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default DS.RESTAdapter.extend({
  github: Ember.inject.service('github'),
  authorizer: 'authorizer:token',
  host: ENV.APP.API_HOST,
  github_storage: storageFor('github'),
  namespace: Ember.computed('github_storage', function() {
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');

    return `repos/${owner}/${repo}`
  }),
  updateRecord: function(store, type, snapshot) {
    var token = this.get('github').token;
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');
    var data = this.serialize(snapshot, { includeId: true });
    var number = snapshot._attributes.number;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'PATCH',
        url: `https://api.github.com/repos/${owner}/${repo}/${type.modelName}s/${number}`,
        dataType: 'json',
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${token}`
        }
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
}); 
