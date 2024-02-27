const square = require('./square.js');

describe('square', () => {

	beforeEach(() => {

	})

	test('вызов метода единожды', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	})

	test('метод не вызывается', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	})

	afterEach(() => {
		jest.clearAllMocks();
	})

});






// test('корректное значение', () => {
// 	expect(square(mockValue)).toBe(mockValue * mockValue);
// });

// test('ввод строки', () => {
// 	expect(square("2")).toBe(false);
// });

// test('результат не больше чем', () => {
// 	expect(square(mockValue)).toBeLessThan((mockValue * mockValue) + 1);
// });

// test('результат не меньшечем', () => {
// 	expect(square(mockValue)).toBeGreaterThan(mockValue * mockValue - 1);
// });
// test('результат не равен', () => {
// 	expect(square(2)).not.toBe(7);
// });
// test('не равен Undefined', () => {
// 	expect(square(undefined)).not.toBeUndefined();
// })