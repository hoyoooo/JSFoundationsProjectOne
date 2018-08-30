const numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43]

// returns an array of just the even numbers from the received array.
function filterEvens(numbers) {
	let evens = []
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i]%2 === 0) {
			evens.push(numbers[i]);
		}
	}

	return evens;
}

// returns an array of just the odd numbers from the received array.
function filterOdds(numbers) {
	let odds = []
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i]%2 !== 0) {
			odds.push(numbers[i]);
		}
	}

	return odds;
}

function sumOdds(numbers) {
	let odds = filterOdds(numbers);
	let sum = 0;
	for (let i=0; i<odd.length; i++) {
		sum += odds[i];
	}
	return sum;
}

// use multi line comments
// makes the array into an array of pairs.
// order doesn't matter.
// if the length of the array is odd, the last element is in an array on its own.
function makePairs(names) {
	let result = [];
	let pairs = [];

	while(names.length > 1) {
		pairs.push(names.pop());
		pairs.push(names.pop());
		result.push(pairs);
		pairs = [];
	}

	if (names.length) {
		result.push([names.pop()])
	}

	return result;
}

// have runners for all the functions, with a message that introduces this block of the code, and not explicitly say to not touch the code.
console.log(makePairs(["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"]))