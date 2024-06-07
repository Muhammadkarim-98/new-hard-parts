// BISMILLAH
// simple example
console.log(1);
console.log(2);
setTimeout(() => {
	console.log("Callback fn fired!");
}, 2000);
console.log(3);
console.log(4);

// 1
// 2
// 3
// 4
// Callback fn fired!
