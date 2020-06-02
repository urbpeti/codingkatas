import { flattenAndSort } from '../src/flatten_and_sort_an_array';

describe('flattenAndSort', () => {
  it('greets a user with `Hello, {name}` message', () => {
    expect(flattenAndSort([])).toEqual([]);
    expect(flattenAndSort([[], [1]])).toEqual([1]);
    expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 100]);
  });
});
