fetch("https://jsonplaceholder.typicode.com/todos/")
	.then((response) => {
		console.log("resolved: ", response);
		return response.json();
	})
	// ".json()" returns promise that's why we should use .then
	.then(data => console.log(data))
	.catch((err) => console.log("rejected: ", err));
