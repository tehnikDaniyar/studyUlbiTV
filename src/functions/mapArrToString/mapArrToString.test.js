const mapArrToString = require('./mapArrToString.js');

describe('mapArrtoString', () => {
	test('корректное значение', () => {
		expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
	});
	test('корректное значение', () => {
		expect(mapArrToString([1, 2, 3, "4"])).toEqual(["1", "2", "3"]);
	});
	test('корректное значение', () => {
		expect(mapArrToString([1, 2, 3, "4", 5])).toEqual(["1", "2", "3", "5"]);
	});
	test('входной массив с объектом', () => {
		expect(mapArrToString([1, 2, 3, "4", 5, { a: 1, b: 2 }])).toEqual(["1", "2", "3", "5"]);
	});
	test('входной массив с Булиевыми значениями', () => {
		expect(mapArrToString([1, 2, 3, "4", 5, true, false])).toEqual(["1", "2", "3", "5"]);
	});
});


