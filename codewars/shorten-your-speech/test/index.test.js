const shortenSpeech = require('../');

describe('shortenSpeech', () => {
  test('should not modify words less then 4 character', () => {
    expect(shortenSpeech("Cat dog hot low ?")).toBe("Cat dog hot low ?");
  });
});
