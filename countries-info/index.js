const fs = require('fs');

const country = process.argv[2];

fs.readFile('./countries4.json', 'utf-8', (err, data) => {
	if (err) throw err;
	// data.forEach(function(item){
	// 	console.log(item.name);
	// });
	console.log(data.length);
});

// const food = ['pizza', 'fruits'];

// food.forEach(function(item) {
// 	console.log(item);
// });