// "fITERATION FUNCTION" BY CALLING RETURNNEXTELEMENT
function createFunction(array) {
	let i = 0;

	function inner() {
		const element = array[i];
		i++;
		return element;
	}
	return inner;
}

const returnNextEl = createFunction([4, 5, 6]);
const next1 = returnNextEl(); // 4
const next2 = returnNextEl(); // 5

// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS IN JS!
function createNewFunction() {
	function add2(num) {
		return num + 2;
	}
	return add2;
}

const newFunction = createNewFunction();
const newFN = newFunction(5); // 7
console.log(newFN);

// GENERATOR
function* createFlow1() {
	yield 4;
	yield 5;
	yield 6;
}

const returnNextElement = createFlow1();
const el1 = returnNextElement.next(); // { value: 4, done: false }
const el2 = returnNextElement.next(); // { value: 5, done: false }

//

function* createFlow2() {
	const num = 10;
	const newNum = yield num;
	yield 5 + newNum;
	yield 6;
}

const returnNextElement2 = createFlow2();
const element1 = returnNextElement2.next(); // { value: 10, done: false }
const element2 = returnNextElement2.next(99); // { value: 104, done: false }
console.log(element2);

//

function doWhenDataReceived(value) {
	returnNextElement4.next(value);
}

function* createFlow4() {
	const data = yield fetch("https://randomfox.ca/floof/");
	console.log(data);
}
const returnNextElement4 = createFlow();
const futureData1 = returnNextElement4.next();

futureData1.then(doWhenDataReceived);

//
// Async/await simplifies all this and finally fixes the inversion of control problem of callbacks
async function createFlow() {
	console.log("Me first!");
	const data = await fetch("https://randomfox.ca/floof/");
	console.log(data);
}

const futureData2 = createFlow();
console.log("Me second!");
