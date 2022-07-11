// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// Obs: Estou testando com slice e substring oque basicamente não difere em nada nesta prática, porém comparei
function myFunction(a, b) {
  var valueA = a.slice(3);
  var valueB = b.substring(3);

  return console.log(`Value A: ${valueA} | ValueB: ${valueB}`);
}

// Test Cases:
myFunction('abcdefg', 'abcdefg');
myFunction('1234', '1234');
myFunction('fgedcba', 'fgedcba');
