Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});

Meteor.publish('SingleRecipe', function(id){
	check(id, String);
	return Recipes.find({_id: id});
});