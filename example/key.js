/*
	rename this file as key.js
	this file should have your apikeys and any secrets client ids, etc 
	it is recommended to add this file to your gitignore file for security purposes
*/
module.exports = {
	google: {
		client_ID: 'your client id',
		client_secret: 'your client secret'
	},
	facebook: {
		client_ID: 'your client id',
		client_secret: 'your client secret'
	},
	encryptionKey: 'your secret',
	db: 'your db name',
	remoteURL: 'your remote mongoose db url'
}

