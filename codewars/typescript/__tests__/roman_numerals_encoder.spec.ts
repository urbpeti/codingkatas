import { solution } from '../src/roman_numerals_encoder';

describe('solution', () => {
  test.each([
    [1, 'I'],
    [2, 'II'],
    [5, 'V'],
    [4, 'IV'],
    [69, 'LXIX'],
    [1000, 'M'],
    [1990, 'MCMXC'],
    [2008, 'MMVIII'],
    [1444, 'MCDXLIV'],
    [1777, 'MDCCLXXVII'],
  ])('%i === %s', (input: number, expected: string) => {
    expect(solution(input)).toBe(expected);
  });
});