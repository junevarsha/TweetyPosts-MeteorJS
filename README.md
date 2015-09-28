# TweetyPosts-MeteorJS

Structure:
Step 1) Iron router :
Popular with Meteor : Define in a configuration file :  which route to go to which template
How router works:
configure the layoutTemplate 
map the URL’s
the Templates of the routes should have the head,body, template(meteor automatically locates the head)
renderPage 
yield tag is used to load all the templates and routes
Now installed Bootstrap for the UI
Created the navbar , some layout works, created a Modal so that can prompt user with the add tweet form
Then created the static contents setup so that dynamic data can be wired up from the Collections.

Step 2) Accounts entry package which has all the contents added to it used for user sign-up/registration/signin:

if loop to check if current user is signed in then show only the edit profile pic and sign out option else
show sign in (navbar.html)

Step3) Profile Image :FSCollection : file management Package
Upload an image

create an collection, gridfs - storage adapter that allows us to store the image files to MongoDB
(collection.js)
2 collection :

Profile Images
User Images = Designate image to a user : we can do it using the userId
Check who is logged in 
Image will be assigned to that person

Now define the event : So every “edit-profile” is a submit event. Once this occurs we should put the image to fsCollection then insert the ProfileImage to the UserImages collection

Step4) Adding the username field to the accountsEntry and accountsUI

Step5) Create Posts Collection : 

Attach schema for dynamic wiring with the templates to collection.js. Now all the info come from the Posts Collection
new Date() gives the current Date

Step7)

wiring the dynamic image 

step8)

autovalue to schema to get the things automatically included along with the body

step9)

publish and subscribe from the server
