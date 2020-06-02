const shortenSpeech = require('./shorten-your-speech');

describe('shortenSpeech', () => {
  it('should not modify words less then 4 character', () => {
    expect(shortenSpeech('Cat dog hot low ?')).toBe('Cat dog hot low ?');
  });

  it('should not modify words if it does not contains vowel after 3. character', () => {
    expect(shortenSpeech('Word world tttttt lhkjqrplmnbvx ?')).toBe('Word world tttttt lhkjqrplmnbvx ?');
  });

  it('should shorten words after the fourth character if it is a vowel', () => {
    expect(shortenSpeech('Hello coffee hexab ?')).toBe('Hell. coff. hex. ?');
  });

  it('should shorten words which are longer than 4 character at the first vowel', () => {
    expect(shortenSpeech('vufmjrxpzjstmdyirrauindilnmoogedxygqktetoqzkpsbnuo')).toBe('vufmjrxpzjstmdy.');
  });
});
