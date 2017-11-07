/*
	this page is for a compilation of all routes for all user, regardless of whether its a passport or local user
*/

const Router 	 	 = require('express').Router(),
	displayRoutes  	 = require('../config/displayroutes');


Router.get('/one/:id',(req,res) => {
	console.log('baz');
	if(req.isAuthenticated() && req.user._id == req.params.id) {
		let html = '<p> welcome to your homepage '+req.user.username+'</p><br/> <p> you user is '+req.user._id + '</p> <a href="/user/signout">LOG OUT</a>'
		res.send(html);
	}else if(req.session.localUser){
		let html = '<p> welcome to your local user homepage '+req.session.localUser.username+'</p><br/> <p> you user is '+req.session.localUser._id+'</p>  <br/> <a href="/newlocallogout/">new local logout</a>';

		res.send(html);
	}else{
		res.redirect('/');
	}
})

Router.get('/signout',(req,res)=> {
	if(req.session.localUser){
		req.sessionlocalUser = null;
		res.redirect = "/";
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