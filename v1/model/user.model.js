const mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

let UserSchema = new Schema({
	timecreated: {
		type: Date,
		required: true,
		default: Date.now()
	},
	lastupdated: {
		type: Date,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: false //only required for local users
	},
	googleid: {
		type: Number,
		required: false //only needed for google users
	},
	facebookid: {
		type: Number,
		required: false //only needed for facebook users
	}
})


module.exports = mongoose.model('User',UserSchema);