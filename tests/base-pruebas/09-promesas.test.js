import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync should return an hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        done();
      });
  });

  test('getHeroeByIdAsync should return an error if hero does not exists', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      // Este then en esta prueba estaría de mas
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el héroe con el ID ${id}`);
        done();
      });
  });
});