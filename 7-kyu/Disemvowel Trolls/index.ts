export class Kata {
  static disemvowel (str: string):string {
    return str.match(/[^aeiou]/gi).join('');
  }
}
