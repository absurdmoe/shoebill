#!/usr/bin/env node  
/*
	makes os run this script as a program using node ^
	chmod +x <filename.ext>
*/

const { exec } = require('child_process'),
	{ write }  = require('./createfile'),
	path 	   = require('path'),
	fs 		   = require('fs');
// let cmd = '&&';

// path.resolve(__dirname, some, dir);
let root = process.argv[4];

console.log(root);

if(process.argv[2] === 'start') {
	write(root,'model','user.model.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/model/user.model.js','created or reset schema');
	write(root,'config','displayroutes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/config/displayroutes.js','created or reset display routes page');
	write(root,'routes','localuser.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/localuser.routes.js','created or reset local user routes');
	write(root,'views','index.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/index.ejs','created or reset homepage ejs view');
	write(root,'views/partials','signup.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/signup.ejs','created or reset sign up partial');
	write(root,'views/partials','login.ejs','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/views/partials/login.ejs','created or reset log in partial');
	write(root,'public','shoebill.css','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/public/shoebill.css','created or reset css styling used in index.ejs/home route');
	write(root,'./',process.argv[3],'https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/localentry.js', 'created or reset entry point'); //entry point
	write(root,'routes','user.routes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/routes/user.routes.js','created or reset user routes which can be used for local or oauth/social media users');
}
