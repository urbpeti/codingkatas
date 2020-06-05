export function solution(input: number): string {
  const romanNumbers = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  let res = "";

  let n = input;
  const keys = Object.keys(romanNumbers).sort((a: string, b: string) => (+b) - (+a));
  for (const key of keys) {
    const d = parseInt(key, 10);
    const count = n / d;
    const reminder = n % d;
    res += romanNumbers[key].repeat(count);
    n = reminder;
  }

  return res;
}
