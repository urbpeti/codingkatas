const removeZeros = require('./remove-zeros');

describe('Test cases', () => {
  test('Zero should be at the end', () => {
    const input = [0, 1];
    const solution = [1, 0];
    expect(JSON.stringify(removeZeros(input))).toBe(JSON.stringify(solution));
  });

  test.each([
    ['base test', [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14], [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]],
    ['contaning string zero', [7, 2, '0', 3, 0, 4, 6], [7, 2, 3, 4, 6, '0', 0]],
    ['contaning null', [7, 2, null, 3, 0, 4, 6], [7, 2, null, 3, 4, 6, 0]],
    ['contaning false', [7, 2, false, 3, 0, 4, 6], [7, 2, false, 3, 4, 6, 0]],
  ])("codingkata's test %s", (description, input, solution) => {
    expect(JSON.stringify(removeZeros(input))).toBe(JSON.stringify(solution));
  });
});
