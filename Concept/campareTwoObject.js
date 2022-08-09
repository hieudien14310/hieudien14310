const _ = require('lodash')
function CampareTwoObject(newObj, oldObj) {
	const result = []
	Object.keys(newObj).forEach((key) => {
		if (!_.isEqual(newObj[key], oldObj[key])) {
			result.push(key)
		}
	})
	return result
}

const objA = {
	foo: 'bar',
	baz: 'fizz',
	cool: true,
	what: {
		one: 'one',
		two: 'two',
	},
	wow: {
		deep: {
			key: ['a', 'b', 'c'],
			values: '123',
		},
	},
	array: ['lol', 'hi', 'there'],
}

const objB = {
	foo: 'bar',
	baz: 'fizz',
	cool: false, // <-- diff
	what: {
		one: 'one',
		two: 'twox', // <-- diff
	},
	wow: {
		deep: {
			key: ['x', 'y', 'c'], // <-- diff
			values: '098', // <-- diff
		},
	},
	array: ['lol', 'hi', 'difference'], // <-- diff
}
console.log(CampareTwoObject(objA, objB))
