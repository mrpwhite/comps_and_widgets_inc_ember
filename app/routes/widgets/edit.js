import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('widget', params.widget_id);
	},
	setupController(controller, model){
		this._super(controller,model);
		controller.set('didSave', false);
	},
	deactivate(){
		const controller = this.controllerFor('widgets/edit');
		const model = this.modelFor('widgets/edit');
		if(!controller.get("didSave")){
			model.rollbackAttributes();
		}
	},
	actions:{
		saveWidget(widget){
			widget.save().then(() =>{
				return this.transitionTo('widget', widget.get('id'));
			})
		}
	}
});
