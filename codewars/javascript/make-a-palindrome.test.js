const makePalindrome = require('./make-a-palindrome');

describe('makePalindrome', () => {
  it('should return existing palindromes without modification', () => {
    expect(makePalindrome('a')).toBe('a');
    expect(makePalindrome('radar')).toBe('radar');
    expect(makePalindrome('racecar')).toBe('racecar');
  });

  it('expand strings to form palindromes right side', () => {
    expect(makePalindrome('ab')).toBe('aba');
    expect(makePalindrome('abb')).toBe('abba');
    expect(makePalindrome('abc')).toBe('abcba');
    expect(makePalindrome('rad')).toBe('radar');
    expect(makePalindrome('race')).toBe('racecar');
  });

  it('expand strings to form palindromes left side', () => {
    expect(makePalindrome('leveled')).toBe('deleveled');
  });
});
