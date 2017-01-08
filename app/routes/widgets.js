import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('widget');
	},
	actions: {
		deleteWidget(widget){
			let conf = confirm("You Sure?");
			if(conf){
				widget.destroyRecord();
			}
		}
	}
});