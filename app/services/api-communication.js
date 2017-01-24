import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  github: Ember.inject.service('github'),
  github_storage: storageFor('github'),
  post: function(data) {
    var token = this.get('github').token;
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');

    Ember.$.ajax({
      method: 'POST',
      url: `https://api.github.com/repos/${owner}/${repo}/issues`,
      data: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${token}`
      }
    });
  },
  patch: function(data) {
    var token = this.get('github').token;
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');

    Ember.$.ajax({
      method: 'PATCH',
      url: `https://api.github.com/repos/${owner}/${repo}/issues/${data.issue}`,
      data: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${token}`
      }
    });  
  },
  lock: function(number) {
    var token = this.get('github').token;
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');
    
    return Ember.$.ajax({
      method: 'PUT',
      url: `https://api.github.com/repos/${owner}/${repo}/issues/${number}/lock`,
      headers: {
        "Authorization": `Basic ${token}`
      }
    });
  },
  unlock: function(number) {
    var token = this.get('github').token;
    var owner = this.get('github_storage.owner');
    var repo = this.get('github_storage.repo');
    
    return Ember.$.ajax({
      method: 'DELETE',
      url: `https://api.github.com/repos/${owner}/${repo}/issues/${number}/lock`,
      headers: {
        "Authorization": `Basic ${token}`
      }
    });
  }
});
