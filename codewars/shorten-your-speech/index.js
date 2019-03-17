function shortenSpeech(str) {
  return str.split(' ')
    .map(shortenWord)
    .join(' ');
}

function shortenWord(word) {
  return word.length > 3 ? shortenLongWord(word) : word
}

function shortenLongWord(word) {
  const wordBase = word.slice(0, 4)
  const appendix = shortenWordAtFirstVowel(word.slice(4))
  return wordBase + appendix
}

function shortenWordAtFirstVowel(word) {
  const firstVowelPosition = getFirstVowelPosition(word)
  return firstVowelPosition == -1 ? word : word.slice(0,firstVowelPosition) + '.'
}

function getFirstVowelPosition(word) {
  return word.search(/[aeiou]/gi)
}

module.exports = shortenSpeech;
