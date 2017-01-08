import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('component', params.component_id);
	},
	setupController(controller, model){
		this._super(controller,model);
		controller.set('didSave', false);
	},
	deactivate(){
		const controller = this.controllerFor('comps/edit');
		const model = this.modelFor('comps/edit');
		if(!controller.get("didSave")){
			model.rollbackAttributes();
		}
	},
	actions:{
		saveComponent(component){
			component.save().then(() =>{
				return this.transitionTo('component', component.get('id'));
			})
		}
	}
});
