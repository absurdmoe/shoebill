// your entry point file

const express 	   = require('express'), 
	app 	  	   = express(),
	mongoose  	   = require('mongoose'),
	passport  	   = require('passport'),
	bodyParser	   = require('body-parser'),
	session 	   = require('express-session'),
	ejs			   = require('ejs'),
	fs 			   = require('fs');
	key 	  	   = require('./key'),

	displayRoutes  = require('./config/displayroutes'),
	localRoutes    = require('./routes/localuser.routes'),
	userRoutes 	   = require('./routes/user.routes'),


	db			   = key.remoteURL || 'mongodb://localhost/'+key.db,
	port		   = process.env.PORT || 3000;

mongoose.connect(db);



app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: key.encryptionKey }));

app.use(passport.initialize());
app.use(passport.session());



if (fs.existsSync('./routes/facebook.routes')) {
   app.use('/auth/facebook/',require('./routes/facebook.routes'));
}

if(fs.existsSync('./routes/google.routes')) {
	app.use('/auth/google/',require('./routes/google.routes'));
}



app.use('/localuser/',localRoutes);
app.use('/user/',userRoutes);


app.use(express.static('public'));

app.get('/',(req,res) => {
	res.render('index',{errors: [],successes:[]});
})



displayRoutes.addRoute({type:'get',url:'/'})
displayRoutes.viewRoutes();


app.listen(port,(error)=>{
	if(error){
		console.log(error);
	}else{
		console.log('listening on port:',port);
	}
});