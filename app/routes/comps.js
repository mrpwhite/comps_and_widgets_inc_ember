import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('component');
	},
	actions: {
		deleteComp(comp){
			let conf = confirm("You Sure?");
			if(conf){
				comp.destroyRecord();
			}
		}
	}
});
