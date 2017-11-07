/* this file is for all shared routes between any type of user, 
	whether local or passport created user
	all files in here go underneath yourorigin/auth/<route>
*/


app.get('/',(req,res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/signout',(req,res)=>{
	req.session.localUser = null;
	res.redirect('/');
})



