/**
Get all the distinct items in an array.
@param array The array to get the distinct items from.
@example
```
const arrayDistinct = require("array-distinct");

arrayDistinct([1, 2, 1, 3, 2, 4]);
//=> [3, 4]
```
*/
declare function arrayDistinct<ValueType>(array: readonly ValueType[]): ValueType[]

export = arrayDistinct
