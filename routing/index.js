const express = require('express');
const app = express();

// app.get('/apple', function(request, response){
// 	response.send('hey i got apples');
// });

// app.get('/ale', function(request, response){
// 	response.send('hey i got ale');
// });

// app.get(['/apple', '/ale'], function(request, response){
// 	response.send('apple or ale');
// });

// app.get(['/who+a', '/whoa+'], function(req, res){
// 	res.send('I know right !');
// });

app.get('/hello/:name', function(request, response) {
	console.log(`got request for "/hello/${request.params.name}"`);
	response.send(`hello ${request.params.name}!`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
