let person = {
	name: "John",
	age: 20,
	sayHello: function () {
		console.log("Hello");
	},
};

// console.log(typeof person);

// console.log(person.name);
// console.log(person["name"]);

// console.log(person.age);
// console.log(person["age"]);

person.hasCar = true;
person["wealth"] = 1000;

console.log(person);