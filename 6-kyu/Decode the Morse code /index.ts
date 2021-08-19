import { MORSE_CODE } from './preloaded';
export function decodeMorse (morseCode: string): string {
  return morseCode
    .trim()
    .split(' ')
    .map(a => MORSE_CODE[a] || ' ')
    .join('')
    .replace(/\s+/g, ' ');
}
