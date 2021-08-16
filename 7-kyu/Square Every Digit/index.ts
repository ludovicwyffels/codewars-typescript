export class Kata {
  static squareDigits (num: number): number {
    const digits:number[] = num.toString().split('').map(x => Math.pow(Number(x), 2));
    return Number(digits.join(''));
  }
}
