Meteor.subscribe('recipes');

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});