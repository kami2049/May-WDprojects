// create a car object 
// that object has 2 properties
// a "type" (string)
// a "run" (callback function)
// "run" accepts 2 arguments
// 1st argument is an error object if there was an error
// 2nd argument is a status (string) - "vroom"
// create 2 instances of the car
// each instance should pass a different "type"
// and a callback function that console logs the status 


function Car(type){
	this.type = type
	this.run = function(callback){
		callback(null, "vroom")
	}
}

var car = new Car("fiat");
var car1 = new Car("honda");

car.run(function(err, status){
	console.log(status)
})

car1.run(function(err, status){
	console.log(status)
})

