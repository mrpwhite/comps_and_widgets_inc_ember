import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, model){
		this._super(controller, model);
		//Sets default view
		controller.set('compsView', "grid");
		controller.set('columns',[
				{
					propertyName: "name",
					title: "Name"
				},
				{
					propertyName: "description",
					title: "Description"
				}
			])
	},
	actions:{
		showGrid(){
			const controller = this.controllerFor('comps/index');
			controller.set('compsView', "grid");
		},
		showTable(){
			const controller = this.controllerFor('comps/index');
			controller.set('compsView', "table");
		}
	}
});
