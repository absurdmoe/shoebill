const { exec } = require('child_process'),
	fs 		   = require('fs');

module.exports = {
	write: (directory,desiredFilename,rawFile,msg) => {
		let folder = __dirname + directory,
			path   = folder + desiredFilename;
		try{
			fs.lstatSync(folder).isDirectory();
			exec('curl -o ' + path + ' ' + rawFile);
			process.stdout.write(msg + ' in ' + path + ' \n');
		}catch(err){
			fs.mkdirSync(folder);
			exec('curl -o' + path + ' ' + rawFile);
			process.stdout.write( msg + ' in: ' + path + ' \n');
		}
	}
}



/*	
	--directory must be in the following form: '/dirname/', i.e: '/model' 
	--desiredFileName must be in the following form: 'file.ext'
	--rawFile must be in the following form: https://<link> and must be a raw document
	--msg must be in the following form: 'your message explaining what you did' with no spaces at the end of the string
*/


	// try{
	// 	fs.lstatSync(__dirname + "/model").isDirectory(); //if model directory exists
	// 	exec('curl -o ' + __dirname + '/model/user.model.js https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/model/user.model.js');
	// 	process.stdout.write('reset schema in: /model/user.model.js \n');
	// }catch(err) {
	// 	fs.mkdirSync(__dirname + '/model');
	// 	exec('curl -o ' + __dirname + '/model/user.model.js https://raw.githubusercontent.com/Mohammadhunan97/shoebill/master/model/user.model.js');
	// 	process.stdout.write('created schema in: /model/user.model.js \n');
	// }