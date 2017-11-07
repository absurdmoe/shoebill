# Thank you for using Shoebill.js:


## Reference: 
* To install run the following command:
	* npm install shoebilljs -g
* To setup your project run the following command:
	* shoebill start <entrypointfile.js> // this is whatever file you want as your entry point; the file that you will run node <file.js>
	* this will create the model/user.model.js, config/displayroutes.js, routes/localuser.routes.js, public/shoebill.css, <entrypointfile.js>, and routes/user.routes.js files
	* please be aware that by running shoebill start you will overwrite any existing files by the above names

## Explaination of files created:

* model/user.model.js refers the local user mongoose schema/model
* config/displayroutes.js is a file used purely to log which routes are available and what method they are, if you would like to disclude this file comment out our delete any line where you see displayRoutes or displayroutes.js
* routes/localuser.routes.js contains all the create, read, update, and delete routes for local users as well as a local user signout and login
* /views/index.ejs refers to the ejs view that is rendered at the route '/'
* public/shoebill.css contains the styling linked in /views/index.ejs 
* <entrypoint.js> is the entrypoint of your app, to start run node <entrypoint.js>
* /routes/user.routes.js is used for all the routes related to user resources, regardless of whether the user was created through oauth or locally

## Goals:
* Make list all routes executable [ ]
* Make add facebook executable for oauth 2.0 sign in [ ]
* Make add google executable for oauth 2.0 sign in [ ]
* Add posts resource, including ejs layouts for posts, models for post, and routes for posts. [ ]
* Add email support  [ ]
* Make more similar to Devise [ ]