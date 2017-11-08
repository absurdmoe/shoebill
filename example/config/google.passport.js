const passport 	   = require('passport'),
	GoogleStrategy = require('passport-google-oauth20'),
	key			   = require('../key'),
	User 		   = require('../model/user.model');

passport.serializeUser((user,done)=>{
	done(null,user.id);
})

passport.deserializeUser((id,done) => {		
	User.findById(id).then((user)=>{
		done(null,user);
	})
})


passport.use(new GoogleStrategy({
	clientID: key.google.client_ID,
	clientSecret: key.google.client_secret,
	callbackURL: '/auth/google/redirect',
	enableProof: true
},(accessToken,refreshToken,profile,done) => {
	User.findOne({ googleid: profile.id }).then((currentuser) => {
		if(currentuser) {
			done(null,currentuser);
		}else{
			let newuser = new User;

			newuser.lastupdated = Date.now();
			newuser.username 	= profile.displayName;
			newuser.password 	= null; 
			newuser.googleid 	= profile.id;
			newuser.facebookid  = null;

			newuser.save().then((thenewuser) => {
				done(null,thenewuser);
			})
		}
	})
}))





