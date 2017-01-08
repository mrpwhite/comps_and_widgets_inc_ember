import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('widget', params.component_id);
	},
	actions: {
		deleteWidget(widget){
			let conf = confirm("You Sure?");
			if(conf){
				widget.destroyRecord().then(()=>{
					this.transitionTo("widgets");
				});
			}
		}
	}
});
