const mapArrToString = require('./mapArrToString.js');

describe('mapArrtoString', () => {
	test('корректное значение', () => {
		expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
	});
});


