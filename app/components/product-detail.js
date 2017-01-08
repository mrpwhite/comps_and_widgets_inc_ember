import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(){
			const model = this.get('model');
			this.sendAction("action", model)
		}
	}
});
