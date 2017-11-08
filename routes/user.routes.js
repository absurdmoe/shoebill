/*
	this page is for a compilation of all routes for all user, regardless of whether its a passport or local user
*/
const Router 	 	 = require('express').Router(),
	displayRoutes  	 = require('../config/displayroutes');


Router.get('/one/:id',(req,res) => {
	console.log('baz');
	if(req.isAuthenticated() && req.user._id == req.params.id) {
		res.render('profile',{user: req.user});
	}else if(req.session.localUser){
		res.render('profile',{user: req.session.localUser});
	}else{
		res.redirect('/');
	}
})

Router.get('/signout',(req,res)=> {
	if(req.session.localUser){
		req.session.destroy(function(err) {
			res.redirect = "/";
	    })
	}else if(req.isAuthenticated()){
		req.logout();
  	 	res.redirect("/"); //Can fire before session is destroyed?
	}else{
		res.redirect("/");
	}
})

displayRoutes.addRoute({type:'get',url:'/user/one/:id/'});
displayRoutes.addRoute({type:'get',url:'/user/signout/'});


module.exports = Router;