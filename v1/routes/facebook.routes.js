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
	res.redirect('/user/one/'+req.user._id);
})


displayRoutes.addRoute({type:'get',url:'/auth/facebook/'});
displayRoutes.addRoute({type:'get',url:'/auth/facebook/redirect'});

module.exports = Router;
