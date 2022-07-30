/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(array) {
  if (!array.length) return [];

  let newArray = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      newArray = newArray.concat(flatten(item));
    }

    else {
      newArray = newArray.concat(item);
    }
  }
  
  return newArray;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
