import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('component');
	},
	setupController(controller, model){
		this._super(controller,model);
		controller.set('didSave', false);
	},
	deactivate(){
		const controller = this.controllerFor('comps/new');
		const model = this.modelFor('comps/new');
		if(!controller.get("didSave")){
			model.destroyRecord();
		}
	},
	actions: {
		saveComponent(newComp){
			const controller = this.controllerFor('comps/new');
			controller.set('didSave', true);
			newComp.save().then(() => {
				// this.controllerFor('comps').set('createdNewComp', true);
				this.transitionTo('component', newComp.get('id'));
			});
		},
		cancelComponent(newComp){
			newComp.destroyRecord().then(() => {
				this.transitionTo('comps');
			});
		}
	}
});
