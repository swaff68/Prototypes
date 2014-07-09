

var RefuelStation = function(){
	
};

RefuelStation.prototype.refuel = function(truck){
	truck.fuelLevel = 100;


};



var Truck = function(color){

	if(color){
	this.color = color || 'red';	
	}

	this.iconType = 'truck';

	this.fuelLevel = 100;





	this.create = function(){
		var el = $('<i>')
			.addClass('icon-' + this.iconType)
			.css('color', this.color);
		return el;
	}
};

Truck.prototype.drive = function(){
	this.fuelLevel -= 25

	return this.fuelLevel;

};

Truck.prototype.fuelLeft = function(){


	return this.fuelLevel;
};

Truck.prototype.color = 'red';
Truck.prototype.create = function() {
	this.el = $('<i>')
			.addClass('icon-' + this.iconType)
			.css('color', this.color);
		return this.el;
	
};

Truck.prototype.update = function(){
	this.el.css('color', this.color);
};

var Ambulance = function(color){

	if(color){
	this.color = color;	
	}
	this.iconType = 'ambulance'
};


// Ambulance.prototype.create = function() {
// 	this.el = $('<i>')
// 			.addClass('icon-' + this.iconType)
// 			.css('color', this.color);
// 		return this.el;
	
// };

Ambulance.prototype = new Truck();

Ambulance.prototype.constructor = Ambulance;

Ambulance.prototype.color = 'blue';

// Ambulance.prototype.update = function(){
// 	this.el.css('color', this.color);

// };

var burritoTruck = new Truck();
$('body').append(burritoTruck.create());


var toFuTruck = new Truck('green');
$('body').append(toFuTruck.create());



var ambulance = new Ambulance();
$('body').append(ambulance.create());


var ambulance1 = new Ambulance('yellow');
$('body').append(ambulance1.create());

var ambulance2 = new Ambulance('purple');
$('body').append(ambulance2.create());

var esso = new RefuelStation();




$(document).on('ready', function() {
  
});