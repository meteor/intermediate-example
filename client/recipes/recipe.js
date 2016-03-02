Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//	this.editMode = new ReactiveVar();
	// this.editMode.set(false);
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function () {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	}
});