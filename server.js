var express = require('express');
var app = express();



// to render all static files
app.use(express.static(__dirname + '/'))


app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(err){
	if(err) {
		console.log(err);
	} else {
		console.log("Listening on port 3000");
	}
});