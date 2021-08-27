export class Kata {
  static spinWords (words: string): string {
    const wordArray = words.split(' ');

    const reverseString = (str: string) => {
      return str.split('').reverse().join('');
    };

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length >= 5) {
        const word = wordArray[i];
        wordArray[i] = reverseString(word);
      }
    }

    return wordArray.join(' ');
  }
}
