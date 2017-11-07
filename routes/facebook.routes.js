/* this file is for passportjs social media routes
	 all files in here go underneath yourorigin/auth/<route>
*/
const Router 	 	 = require('express').Router(),
	passport 	  	 = require('passport'),
	displayRoutes  	 = require('../config/displayroutes');

require('../config/facebook.passport.js');


Router.get('/', passport.authenticate('facebook',{
	scope: ['public_profile']
}));

Router.get('/redirect',passport.authenticate('facebook'),(req,res) => {
	let html = '<p>successfully logged in with facebook</p><br/><a href="/user/'+req.user._id+'">Your Homepage</a>'
	res.send(html);
})


displayRoutes.addRoute({type:'get',url:'/auth/facebook/'});

displayRoutes.addRoute({type:'get',url:'/auth/facebook/redirect'});


module.exports = Router;


