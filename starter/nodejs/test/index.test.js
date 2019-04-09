const foo = require('../');

describe('simple test', () => {
  test('test1', () => {
    expect(foo()).toBe(1);
  });
});
