import '.';

describe('solution', function () {
  it('tests', () => {
    const str = "How can mirrors be real if our eyes aren't real";
    expect(str.toJadenCase()).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});
