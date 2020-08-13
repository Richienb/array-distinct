const test = require("ava")
const arrayDistinct = require(".")

test("main", t => {
	t.deepEqual(arrayDistinct([1, 2, 1, 3, 2, 4]), [3, 4])
})
