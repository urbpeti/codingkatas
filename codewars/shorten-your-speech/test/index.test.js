const shortenSpeech = require('../');

describe('shortenSpeech', () => {
  it('should not modify words less then 4 character', () => {
    expect(shortenSpeech('Cat dog hot low ?')).toBe('Cat dog hot low ?');
  });

  it('should not modify words if it does not contains vowel after 3. character', () => {
    expect(shortenSpeech('Word world tttttt lhkjqrplmnbvx ?')).toBe('Word world tttttt lhkjqrplmnbvx ?');
  });
});
