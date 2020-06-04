const narcissistic = require('./does_my_number_look_big_in_this');

describe( "Narcissistic Function", function() {
  test.each([
    [7, true],
    [11, false],
    [371, true],
  ])("%i, should be %p", (number, expected) => {
    expect(narcissistic(number)).toBe(expected)
  })
});
