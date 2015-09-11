
Function.prototype.inherits = Function.prototype.inherits || function(parentClass) {
	this.prototype = Object.create(parentClass.prototype);
	console.log(this.name, 'inherits', parentClass.name);
};

function Base() {}

function Class(constructors) {
	constructors.unshift(Base);
	return (function() {
		var Constructor, result;
		if (constructors == null || constructors.length < 1) return context;

		Constructor = (function() {
			var i = 0, c1, c2;

			// Chain all the prototypes
			while (constructors[i + 1]) {
				c1 = constructors[i];
				c2 = constructors[i + 1];
				c2.inherits(c1);

				i++;
			}
			return c2;
		}.bind(this)());

		// Save the constructors so we can run new instances through them later
		Constructor.init = constructors;

		return Constructor; // return the new inherited class
	}.bind(this)());
}

function Instance(Constructor, args) {
	var result = new Constructor(args);

	// Run our new instance through each constructor and pass in args to override
	Constructor.init.forEach(function(c) {
		c.apply(result, [args]);
	}.bind(this));

	return result;
}