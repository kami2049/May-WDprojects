const fs = require('fs');

fs.readFile('./read.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
});

fs.writeFile('message.txt', 'welcome to JS', 'utf-8', (err) => {
	if (err) throw err;
	console.log('files saved');
});