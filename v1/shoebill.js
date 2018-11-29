#!/usr/bin/env node  
/*
	makes os run this script as a program using node ^
	chmod +x <filename.ext>
*/

const { exec } = require('child_process'),
	{ write }  = require('./createfile'),
	path 	   = require('path'),
	fs 		   = require('fs');

let root = process.argv[4];

if(process.argv[2] === 'start') {
	write(root,'model','user.model.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/model/user.model.js','created or reset schema');
	write(root,'config','displayroutes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/config/displayroutes.js','created or reset display routes page');
	write(root,'routes','localuser.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/localuser.routes.js','created or reset local user routes');
	write(root,'views','index.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/index.ejs','created or reset homepage ejs view');
	write(root,'views/partials','signup.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/signup.ejs','created or reset sign up partial');
	write(root,'views/partials','login.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/login.ejs','created or reset log in partial');
	write(root,'views','profile.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/profile.ejs','created or reset profile template')
	write(root,'public','shoebill.css','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/public/shoebill.css','created or reset css styling used in index.ejs/home route');
	write(root,'./',process.argv[3],'https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/localentry.js', 'created or reset entry point'); //entry point
	write(root,'routes','user.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/user.routes.js','created or reset user routes which can be used for local or oauth/social media users');
	write(root,'./','key.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/samplekey.js','created sample key.js remember to replace the info in this file with your actual info');
	process.stdout.write('\n\n remember to replace keys and secrets in key.js with your personal keys and secrets \n\n');
}else if(process.argv[2] === 'add' && process.argv[3] === 'facebook'){
	write(root,'config','facebook.passport.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/config/facebook.passport.js','created or reset facebook strategy');
	write(root,'public/img','fbbutton.png','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/public/img/fbbutton.png','added facebook sign in button image');
	write(root,'routes','facebook.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/facebook.routes.js','created or reset facebook user authentication routes');
	write(root,'views/partials','facebooksignin.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/facebooksignin.ejs','added fb sign in button partial');
	process.stdout.write('\n\n add access to facebook by including facebooksignin partial to index.ejs \n\n');
}else if(process.argv[2] === 'add' && process.argv[3] === 'google'){
	write(root,'config','google.passport.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/config/google.passport.js','created or reset google strategy');
	write(root,'public/img','googlebutton.png','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/public/img/googlebutton.png','added google sign in button image');
	write(root,'routes','google.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/google.routes.js','created or reset google user authentication routes');
	write(root,'views/partials','googlesignin.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/googlesignin.ejs');
	process.stdout.write('\n\n add access to google by including googlesignin partial to index.ejs \n\n');
}
