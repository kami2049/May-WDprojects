// function sub(callback){
// 	callback(10 - 5);
// }

// sub(function(a){
// 	console.log(a)
// });


function greet(name, callback){
	callback(name);
}

greet('kami', function(a){
	console.log("WELCOME " + a)
});