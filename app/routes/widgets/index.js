import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, model){
		this._super(controller, model);
		//sets default view
		controller.set('widgetsView', "grid");
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
			const controller = this.controllerFor('widgets/index');
			controller.set('widgetsView', "grid");
		},
		showTable(){
			const controller = this.controllerFor('widgets/index');
			controller.set('widgetsView', "table");
		}
	}
});
