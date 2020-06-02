function makePalindrome(text) {
  if(isPalindrom(text)) {
    return text;
  }

  let reversed = reverse(text);
  for(let i = 1; i <= text.length; i++) {
    const left = reversed.slice(0, i) + text;
    const right = text + reversed.slice(-i);

    if(isPalindrom(right)) return right;
    if(isPalindrom(left)) return left;
  }
  return null
}

function reverse(text) {
  return text.split('').reverse().join('');
}

function isPalindrom(text) {
  return text === reverse(text);
}

module.exports = makePalindrome;
