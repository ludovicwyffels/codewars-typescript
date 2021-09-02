export function iqTest (numbers: string): number {
  const arr = numbers.split(' ').map(function (el) { return parseInt(el); });

  const odd = arr.filter(function (el) { return el % 2 === 1; });
  const even = arr.filter(function (el) { return el % 2 === 0; });
  return odd.length < even.length ? (arr.indexOf(odd[0]) + 1) : (arr.indexOf(even[0]) + 1);
}
