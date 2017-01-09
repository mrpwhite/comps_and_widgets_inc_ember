import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save(){
			const model = this.get('model');
			return this.sendAction("action", model);
		}
	}
});
