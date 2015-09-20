//publish

Meteor.publish("posts", function(){
	return Posts.find();	
});

//publish

Meteor.publish("ProfileImages", function(){
	return ProfileImages.find();	
});

//publish

Meteor.publish("UserImages", function(){
	return UserImages.find();	
});

