import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('widget');
	},
	setupController(controller, model){
		this._super(controller,model);
		controller.set('didSave', false);
	},
	deactivate(){
		const controller = this.controllerFor('widgets/new');
		const model = this.modelFor('widgets/new');
		if(!controller.get("didSave")){
			model.destroyRecord();
		}
	},
	actions: {
		saveWidget(newComp){
			const controller = this.controllerFor('widgets/new');
			controller.set('didSave', true);
			newComp.save().then(() => {
				alert('You succesfully created a widget');
				this.transitionTo('widgets');
			});
		},
		cancelWidget(newComp){
			newComp.destroyRecord().then(() => {
				this.transitionTo('widgets');
			});
		}
	}
});
