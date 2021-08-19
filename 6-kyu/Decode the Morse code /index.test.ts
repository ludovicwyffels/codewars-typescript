import { decodeMorse } from '.';

describe('Example from description', function () {
  it('HEY JUDE', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });
});
