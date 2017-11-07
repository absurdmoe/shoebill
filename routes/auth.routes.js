/* this file is for passportjs social media routes
	 all files in here go underneath yourorigin/auth/<route>
*/
const Router 	 	 = require('express').Router(),
	passport 	  	 = require('passport'),
	facebookPassport = require('../config/facebook.passport'),
	googlePassport   = require('../config/google.passport'),
	displayRoutes  	 = require('../config/displayroutes');


Router.get('/facebook/', passport.authenticate('facebook',{
	scope: ['public_profile']
}));
displayRoutes.addRoute({type:'get',url:'/auth/facebook/'});



Router.get('/facebook/redirect/',passport.authenticate('facebook'),(req,res) => {
	//success redirect to homepage view for user/req.user._id
})
displayRoutes.addRoute({type:'get',url:'/auth/facebook/redirect'});


Router.get('/google/', passport.authenticate('google',{
	scope: ['profile']
}));
displayRoutes.addRoute({type:'get',url:'/auth/google/'});


Router.get('/google/redirect/',passport.authenticate('google'),(req,res) => {
	//success redirect to homepage view for user/req.user._id
})
displayRoutes.addRoute({type:'get',url:'/auth/google/redirect'});

module.exports = Router;