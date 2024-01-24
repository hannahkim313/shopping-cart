import capitalize from '../capitalize';

describe('capitalization of one-word strings', () => {
  it('capitalizes "fashion" to "Fashion"', () => {
    expect(capitalize('fashion')).toBe('Fashion');
  });

  it('does not capitalize non-letters', () => {
    expect(capitalize('1')).toBe('1');
    expect(capitalize('!')).toBe('!');
  });
});

describe('capitalization of multi-word strings', () => {
  it('capitalizes "ice cream" to "Ice Cream"', () => {
    expect(capitalize('ice cream')).toBe('Ice Cream');
  });

  it('capitalizes "merry Christmas" to "Merry Christmas"', () => {
    expect(capitalize('merry Christmas')).toBe('Merry Christmas');
  });
});
