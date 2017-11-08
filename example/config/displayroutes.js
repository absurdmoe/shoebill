const chalk = require('chalk');
let routes = [];

module.exports = {
	addRoute: (route) => {
		routes.push(route);
	},
	viewRoutes: () => {
		console.log('\n\n');
		routes.forEach((route) => {
			console.log(chalk.red(route.type),'\t\t',chalk.green('http://localhost:3000'+route.url));
		})	
		console.log('\n\n');
	}
}

