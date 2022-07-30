/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

let reverse = function(string) {

  if (string.length === 0) {
    return "";
  }
  
  let letters = string.split('');

  if (letters.length == 1) {
    return letters.pop();
  }
  return letters.pop() + reverse(letters.join(''));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
