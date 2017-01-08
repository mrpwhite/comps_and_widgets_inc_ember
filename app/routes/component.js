import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('component', params.component_id);
	},
	actions: {
		deleteComp(comp){
			let conf = confirm("You Sure?");
			if(conf){
				comp.destroyRecord().then(()=>{
					this.transitionTo("comps");
				});
			}
		}
	}
});
