import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('issues', { path: '/'}, function() {
    this.route('index', { path: '/'});
    this.route('show', { path: '/:number'});
    this.route('new');
    this.route('edit', { path: '/:number/edit'});
  });
});

export default Router;
