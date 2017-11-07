/* this file is for local user routes
	 all files in here go underneath yourorigin/localuser/<route>
*/



const Router 	   = require('express').Router(),
	User		   = require('../model/user.model'),
	bcrypt 		   = require('bcryptjs'),
	salt 	 	   = bcrypt.genSaltSync(10),
	displayRoutes  = require('../config/displayroutes');


/* NOTE: the route /localuser/index below is purely for debugging/testing 
	purposes it is highly recommended hat you don't use this route in production */

// Router.get('/index',(req,res) => {
// 	User.find({}).exec((error,user) => {
// 		if(error) res.send(error);
// 		res.send(user);
// 	})
// })

Router.get('/signout',(req,res)=>{
	req.session.localUser = null;
	res.redirect('/');
})
displayRoutes.addRoute({type:'get',url:'/localuser/signout/'})


Router.post('/login',(req,res)=>{
	User.find({username: req.body.username},(err,user)=>{
		if(user.length === 0 || bcrypt.compareSync(req.body.password, user[0].password) !== true){
			// if there's no user returned or if the password does not match
			res.redirect("/");
		}else{
			req.session.localUser = user[0];
			res.redirect("/user/one/"+user[0]._id);
		}
	})
})
displayRoutes.addRoute({type:'post',url:'/localuser/login/'})

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
displayRoutes.addRoute({type:'post',url:'/localuser/new/'})


Router.put('/update/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findById(req.params.id,(err,user) => {
			if(!err) {
				newuser.lastupdated = Date.now();
				user.username = req.body.username || user.username;
				user.password = bcrypt.hashSync(req.body.password,salt) || user.password;

				user.save((err,user)=> {
					if(err){ 
						res.send(err);
					}else{
						req.session.localUser = user;
						res.redirect = "/user/"+user._id;
					}	
				})
			}
		})
	}
})
displayRoutes.addRoute({type:'put',url:'/localuser/update/:id'})

Router.delete('/delete/:id',(req,res) => {
	if(req.session.localUser && req.session.localUser._id === req.params.id) {
		User.findByIdAndRemove(req.params.id,(err,user) => {
			if(err) res.send(err);
			res.send(user);
		})
	}
})
displayRoutes.addRoute({type:'delete',url:'/localuser/delete/:id'})

module.exports = Router;