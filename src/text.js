let add = (x, y) => x + " " + y;

let capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

let wordsToSentence = words => {
  let sentence = words.join(" ") + ".";
  let result = capitalizeFirstLetter(sentence);
  return result;
};

module.exports = {
  add,
  wordsToSentence
};
