const getToDos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
	// Throwing error
	if (response.status !== 200) {
		throw new Error('Cannot fetch the data!');
	};
	const data = await response.json();
	// console.log(data)
	return data;
};

getToDos()
	.then((data) => console.log("resolved: ", data))
	.catch(err => console.log('rejected: ', err.message));
