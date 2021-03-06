# inheritance
A no dependency implementation of inheritance in JavaScript.

```javascript
var Animal, Dog, GermanShepherd, GermanShepherdClass, fido;

Animal = function Animal(args) {
	if (args == null) args = {};
	this.name = args.name || null;
	this.species = args.species || null;
	this.breathesUnderwater = args.breathesUnderwater || false;

	this.constructor.prototype.run = function run() {
		console.log('Runnin!');
	};
};
Dog = function Dog(args) {
	if (args == null) args = {};
	this.sound = args.sound || 'Bark';
	this.ears = args.ears || 'Floppy';

	this.constructor.prototype.misbehave = function misbehave() {
		console.log('Ate the cookies!');
	};
};
GermanShepherd = function GermanShepherd(args) {
	if (args == null) args = {};
	this.ears = args.ears || 'Cropped';

	this.constructor.prototype.herd = function herd() {
		console.log('Sheep herded!');
	};
};

GermanShepherdClass = new Class([Animal, Dog, GermanShepherd]);
// Animal inherits Base
// Dog inherits Animal
// GermanShepherd inherits Dog

fido = new Instance(GermanShepherdClass, {
	sound: 'Whoof!',
	name: 'Fido',
	species: 'Canine',
});

console.log(fido); // GermanShepherd {ears: "Cropped", name: "Fido", species: "Canine", breathesUnderwater: false, sound: "Whoof!"}

fido.run(); // Runnin!
fido.misbehave(); // Ate the cookies!
fido.herd(); // Sheep herded!

console.log('fido is Animal: ', fido instanceof Animal); // fido is Animal:  true
console.log('fido is Dog: ', fido instanceof Dog); // fido is Dog:  true
console.log('fido is GermanShepherd: ', fido instanceof GermanShepherd); // fido is GermanShepherd:  true
console.log('fido is GermanShepherdClass: ', fido instanceof GermanShepherdClass); // fido is GermanShepherdClass:  true
```
