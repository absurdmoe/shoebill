const passport 	     = require('passport'),
	FacebookStrategy = require('passport-facebook'),
	key			     = require('../key'),
	User 		     = require('../model/user.model');

passport.serializeUser((user,done)=>{
	done(null,user.id);
})

passport.deserializeUser((id,done) => {		
	User.findById(id).then((user)=>{
		done(null,user);
	})
})

passport.use(new FacebookStrategy({
    clientID: key.facebook.client_ID,
    clientSecret: key.facebook.client_secret,
    callbackURL: "/auth/facebook/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
 	User.findOne({ facebookid: profile.id }).then((currentuser) => {
		if(currentuser) {
			done(null,currentuser);
		}else{
			let newuser = new User;
			newuser.lastupdated = Date.now();
			newuser.username = profile.displayName;
			newuser.password = null;
			newuser.googleid = null;
			newuser.facebookid = profile.id;

			newuser.save().then((thenewuser) => {
				done(null,thenewuser);
			})
		}
	})
  }
));
