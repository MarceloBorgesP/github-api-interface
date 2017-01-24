import Ember from 'ember';
import token from 'npm:basic-auth-token';

export default Ember.Service.extend({
  authenticate: function(identification, password) {
    this.set('token', token(identification, password));
  }
});
