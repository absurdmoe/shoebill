/* this file is for passportjs social media routes
	 all files in here go underneath yourorigin/auth/<route>
*/
const Router 	  = require('express').Router(),
	passport 	  = require('passport'),
	passportSetup = require('./googlepassport');


Router.get('/facebook/', passport.authenticate('facebook',{
	scope: ['public_profile']
}));
Router.get('/facebook/redirect/',passport.authenticate('facebook'),(req,res) => {
	let html = '<p>successfully logged in with facebook</p><br/><a href="/user/'+req.user._id+'">Your Homepage</a>'
	res.send(html);
})



Router.get('/google/', passport.authenticate('google',{
	scope: ['profile']
}));
Router.get('/google/redirect/',passport.authenticate('google'),(req,res) => {
	let html = '<p>successfully logged in with google</p><br/><a href="/user/'+req.user._id+'">Your Homepage</a>'
	res.send(html);
})

module.exports = Router;