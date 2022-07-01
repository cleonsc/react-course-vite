import { getImage } from '../../src/base-pruebas/11-async-await';

describe('Pruebas 11-async-await', () => {
  test('getImage should return an URL image', async () => {
    const url = await getImage();
    expect(typeof url).toBe('string');
  })
})