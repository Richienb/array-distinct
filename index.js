"use strict"

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	const result = new Set()
	const seenItems = new Set()
	for (const item of array) {
		if (seenItems.has(item)) {
			continue
		} else if (result.has(item)) {
			result.delete(item)
			seenItems.add(item)
		} else {
			result.add(item)
		}
	}

	return [...result]
}
