function Util() {
	this.f2c = function(fahrenheit){
		return (fahrenheit - 32) * 5 / 9;
	};
}

module.exports = Util;