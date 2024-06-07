// BISMILLAH
const getToDos = (callback) => {
	const request = new XMLHttpRequest();
	request.addEventListener("readystatechange", () => {
		// console.log(request, request.readyState)
		if (request.readyState === 4 && request.status === 200) {
			// console.log(request, request.responseText)
			const data = JSON.parse(request.responseText);
			callback(undefined, data);
		} else if (request.readyState === 4) {
			// console.log('could not fetch the data')
			callback("could not fetch");
		}
	});

	const { Promise } = require("node-fetch");

	// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
	// Using JSON data
	request.open("GET", "todos.json");
	request.send();
};

getToDos((err, data) => {
	console.log("callback fired");
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});


// PROMISE EXAMPLE // ---------------------------------------------------------------------------------------------


const getToDos = () => {
	// new Promise declared
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.addEventListener("readystatechange", () => {
			// console.log(request, request.readyState)
			if (request.readyState === 4 && request.status === 200) {
				// console.log(request, request.responseText)
				const data = JSON.parse(request.responseText);
				resolve(data);
			} else if (request.readyState === 4) {
				// console.log('could not fetch the data')
				reject("could not fetch");
			}
		});

		// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
		// Using JSON data
		request.open("GET", "todos.json");
		request.send();
	});
};

getToDos()
	.then((data) => {
		console.log("promise resolved: ", data);
	})
	.catch((err) => console.log("promise rejected: ", err));
