Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");


Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/' ,                   
    dashboardRoute: '/',
		passwordSignupFields: 'USERNAME_AND_EMAIL'      
  });
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_AND_EMAIL'      
	});
});
//helper
Template.registerHelper('getProfileImg', function(userId){
	var imgUrl = UserImages.findOne({userId: userId}) || null;
	if(imgUrl && imgUrl.image){
		imgUrl = imgUrl.image;
	}
	return imgUrl || '/img/profile.jpg';
	});
	
	
	