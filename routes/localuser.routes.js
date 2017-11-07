/* this file is for local user routes
	 all files in here go underneath yourorigin/localuser/<route>
*/



const Router = require('express').Router(),
	User	 = require('../model/user.model'),
	bcrypt 	 = require('bcryptjs'),
	salt 	 = bcrypt.genSaltSync(10);


/* NOTE: the route /localuser/index below is purely for debugging/testing 
	purposes it is highly recommended to delete this route.
*/
Router.get('/index',(req,res) => {
	User.find({}).exec((error,user) => {
		if(error) res.send(error);
		res.send(user);
	})
})

Router.post('/new',(req,res) => {
	let newuser 		= new User;
	newuser.lastupdated = Date.now();
	newuser.username 	= req.body.username;
	newuser.password 	= bcrypt.hashSync(req.body.password,salt); 
	newuser.googleid 	= null;
	newuser.facebookid  = null;

	newuser.save((err, user) => {
		if(err){ 
			res.send(err);
		}else{
			req.session.localUser = user;
			res.redirect = "/user/"+user._id;
		}		
	})
})

Router.put('/update/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findById(req.params.id,(err,user) => {
			if(!err) {
				newuser.lastupdated = Date.now();
				user.username = req.body.username || user.username;
				user.password = bcrypt.hashSync(req.body.password,salt) || user.password;

				user.save((err,user)=> {
					if(err) res.send(err);
					res.send(user);
				})
			}
		})
	}
})

Router.delete('/delete/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findByIdAndRemove(req.params.id,(err,user) => {
			if(err) res.send(err);
			res.send(user);
		})
	}
})

module.exports = Router;