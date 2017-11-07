#!/usr/bin/env node  
/*
	makes os run this script as a program using node ^
	chmod +x <filename.ext>
*/

const { exec } = require('child_process'),
	fs 		   = require('fs'),
	{ write }  = require('./createfile');
// let cmd = '&&';



if(process.argv[2] === 'start') {
	write('/model/','user.model.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/model/user.model.js');
	write('/config/','displayroutes.js','https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/config/displayroutes.js');
}
// if(process.argv[2] === 'add'){
// 	if(process.argv[3] === 'facebook') {
// 		try{

// 		}
// 	}
// }

/*
	stdout refers to the output on the screen
	stderr refers to any any error output
*/

// exec(cmd,(error,stdout,stderr)=> {
// 	  if (error) {
// 	    return;
// 	  }
// 	console.log(`stdout: ${stdout}`);
//   	console.log(`stderr: ${stderr}`);

// })