// your entry point file

const express 	   = require('express'), 
	app 	  	   = express(),
	mongoose  	   = require('mongoose'),
	passport  	   = require('passport'),
	bodyParser	   = require('body-parser'),
	session 	   = require('express-session'),
	key 	  	   = require('./key'),

	displayRoutes  = require('./config/displayroutes'),
	fbRoutes 	   = require('./routes/facebook.routes'),
	googleRoutes   = require('./routes/google.routes'),
	localRoutes    = require('./routes/localuser.routes'),


	db			   = 'mongodb://localhost/shoebill',
	port		   = process.env.PORT || 3000;

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: key.encryptionKey }));




app.use('/auth/facebook/',fbRoutes);
app.use('/auth/google/',googleRoutes); 
app.use('/localuser/',localRoutes);

displayRoutes.viewRoutes();




app.get('/',(req,res) => {
	res.send('hello')
})



app.listen(port,(error)=>{
	if(error){
		console.log(error);
	}else{
		console.log('listening on port:',port);
	}
});