const delay = require('./delay.js');

describe('delay', () => {

	test("корректное значение", async () => {
		const res = await delay(() => 5 + 5, 1000);
		expect(res).toBe(10);
	})
})