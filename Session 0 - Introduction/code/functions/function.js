function functionName(arg1, arg2, arg3) {
	console.log(arg1, arg2, arg3);
}
functionName(1, 2, 3); // 1 2 3

function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2)); // 3

// Proof that functions are objects
// 'proof.js'

const myFunction = function () {
	console.log("Hello from myFunction");
};

// myFunction();

const arrowFunction = () => {
	console.log("Hello from Arrow Function");
}