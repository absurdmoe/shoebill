/* this file is for passportjs social media routes
	 all files in here go underneath yourorigin/auth/<route>
*/
const Router 	 	 = require('express').Router(),
	passport 	  	 = require('passport'),
	displayRoutes  	 = require('../config/displayroutes');

require('../config/google.passport.js');


Router.get('/', passport.authenticate('google',{
	scope: ['profile']
}));
Router.get('/redirect',passport.authenticate('google'),(req,res) => {
	let html = '<p>successfully logged in with google</p><br/><a href="/user/'+req.user._id+'">Your Homepage</a>'
	res.send(html);
})


displayRoutes.addRoute({type:'get',url:'/auth/google/'});
displayRoutes.addRoute({type:'get',url:'/auth/google/redirect'});

module.exports = Router;