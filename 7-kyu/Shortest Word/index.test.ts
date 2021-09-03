import { findShort } from '.';

describe('Sample Test Cases', function () {
  it('Should return the length of the shortest word(s)', function () {
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
    expect(findShort('lets talk about javascript the best language')).toBe(3);
    expect(findShort('i want to travel the world writing code one day')).toBe(1);
    expect(findShort('Lets all go on holiday somewhere very cold')).toBe(2);
    expect(findShort("Let's travel abroad shall we")).toBe(2);
  });
});
