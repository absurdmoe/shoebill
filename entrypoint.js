// your entry point file

const express 	   = require('express'), 
	app 	  	   = express(),
	mongoose  	   = require('mongoose'),
	passport  	   = require('passport'),
	bodyParser	   = require('body-parser'),
	session 	   = require('express-session'),
	key 	  	   = require('./key'),

	displayRoutes  = require('./config/displayroutes'),
	authRoutes     = require('./routes/auth.routes'),
	localRoutes    = require('./routes/localuser.routes'),


	db			   = 'mongodb://localhost/shoebill',
	port		   = process.env.PORT || 3000;

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: key.secret }));

app.use(passport.initialize());
app.use(passport.session());


app.use('/auth/',authRoutes); //allows it to have modularity instead of adding different route files for each social media auth and adding them in later through the exec file
app.use('/localuser/',localRoutes);

displayRoutes.viewRoutes();

app.listen(port,(error)=>{
	if(error){
		console.log(error);
	}else{
		console.log('listening on port:',port);
	}
});