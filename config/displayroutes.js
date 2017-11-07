let routes = [];

module.exports = {
	addRoute: (route) => {
		routes.push(route);
	},
	viewRoutes: () => {
		console.log('\n\n');
		routes.forEach((route) => {
			console.log(route.type,'\t\t',route.url);
		})	
		console.log('\n\n');
	}
}

