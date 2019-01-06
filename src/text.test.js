let text = require("./text");

/*
add, sub, mul, div
add är att första meningen kommer först och den andra sen (hej + då = hej då)
sub är att ta bort andra texten ur den första (abra kadabra - a = bra kadabra)

*/

test("add", () => {
  let x = "hej";
  let y = "då";
  let result = text.add(x, y);
  expect(result).toEqual("hej då");
});

test("words to sentence", () => {
  let words = ["jag", "älskar", "dig"];
  let result = text.wordsToSentence(words);
  expect(result).toEqual("Jag älskar dig.");
});
