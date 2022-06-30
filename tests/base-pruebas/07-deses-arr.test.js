import { returnArray } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('returnArray should return a string and a number', () => {
    const [letters, numbers] = returnArray();

    // assert values
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // assert types
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')

    // assert types too
    expect(letters).toEqual(expect.any(String))
    expect(numbers).toEqual(expect.any(Number))
  })
})