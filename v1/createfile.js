const { exec } = require('child_process'),
	path 	   = require('path'),
	fs 		   = require('fs');



module.exports = {
	write: (root,directory,desiredFilename,rawFile,msg) => {
		let folder = path.resolve(root,directory);
		let mypath = path.resolve(root,directory,desiredFilename);
		try{
			fs.lstatSync(folder).isDirectory();
			exec('curl -o ' + mypath + ' ' + rawFile);
			process.stdout.write(msg + ' in ' + mypath + ' \n');
		}catch(err){
			fs.mkdirSync(folder);
			exec('curl -o' + path + ' ' + rawFile);
			process.stdout.write( msg + ' in: ' + mypath + ' \n');
		}
	}
}



/*	
	--directory must be in the following form: '/dirname/', i.e: '/model' 
	--desiredFileName must be in the following form: 'file.ext'
	--rawFile must be in the following form: https://<link> and must be a raw document
	--msg must be in the following form: 'your message explaining what you did' with no spaces at the end of the string
*/

