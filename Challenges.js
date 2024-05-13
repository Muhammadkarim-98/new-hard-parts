// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// CHALLENGE 1

function sumFunc(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
	let letter = 0;

	function iter() {
		if (letter < arr.length) {
			const element = arr[letter];
			letter++;
			return element;
		} else {
			return undefined;
		}
	}
	return iter;
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2
function* nextIterator(arr) {
	for (let i = 0; i < arr.length; i++) {
		yield arr[i];
	}
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
	let sum = 0;
	const iteratorWithNext = nextIterator(arr);
	for (val of iteratorWithNext) {
		sum += val;
	}
	return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function* setIterator(set) {
	for (val of set) {
		yield val;
	}
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function* indexIterator(arr) {
	for (let i = 0; i < arr.length; i++) {
		yield [i, arr[i]];
	}
}

// Uncomment the lines below to test your work
const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6 (Solved with ChatGPT)

// Define a constructor function Words
function Words(string) {
	this.string = string;
}
// Attach the iterator method to the prototype of Words using Symbol.iterator
Words.prototype[Symbol.iterator] = function* () {
	// Regular expression to match words (sequence of characters separated by spaces)
	const wordRegex = /\w+/g;

	// Use RegExp.exec in a loop to extract each word from the string
	let match;
	while ((match = wordRegex.exec(this.string)) !== null) {
		yield match[0]; // Yield the matched word
	}
};

// Uncomment the lines below to test your work
const helloWorld = new Words("Hello World");
for (let word of helloWorld) {
	console.log(word);
} // -> should log 'Hello' and 'World'

// CHALLENGE 7

function* valueAndPrevIndex(array) {
	for (let i = 0; i < array.length; i++) {
		if (i === 0) {
			yield `${array[i]} was found firstly`;
		}
		yield `${array[i]} was found after index ${i}`;
	}
}

const returnedSentence = valueAndPrevIndex([4, 5, 6]);
console.log(returnedSentence.next());
console.log(returnedSentence.next());
console.log(returnedSentence.next());

//CHALLENGE 8

function* createConversation(string) {
	let intervalID;
	if (string === "english") {
		yield (intervalID = setInterval(() => console.log("Hello there!"), 3000));
	} else {
		yield (intervalID = setInterval(() => {
			console.log("Gibberish1");
		}, 3000));
	}
}

console.log(createConversation("english").next());
setTimeout(() => {
	clearInterval(intervalID);
}, 7000);
