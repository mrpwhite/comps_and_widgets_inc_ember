import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  	//Components Routes
  	this.route('comps', {path:"components"}, function() {
  	  	this.route('new');
        this.route('edit', {path: ":component_id/edit"});
  	});
    this.route('component', {path:"components/:component_id"});
    
    //Widgets Routes
    this.route('widgets', function() {
  	  	this.route('new');
        this.route('edit', {path: ":widget_id/edit"});
  	});
    this.route('widget', {path:"widgets/:component_id"});
});

export default Router;
