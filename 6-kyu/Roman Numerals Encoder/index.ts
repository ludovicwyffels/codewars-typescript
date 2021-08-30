interface Roman {
  [key: string]: number;
}

export function solution (number: number): string {
  const roman: Roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let rest = number;

  let str = '';
  for (const iterator of Object.keys(roman)) {
    const quantity = Math.floor(rest / roman[iterator]);
    rest -= quantity * roman[iterator];
    str += iterator.repeat(quantity);
    if (rest === 0) break;
  }
  return str;
}
