import { getActiveUser, getUser } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
    expect(testUser).toStrictEqual(user);
  })

  test('getActiveUser should return an object', () => {
    const myName = 'César';
    const user = getActiveUser(myName);
    expect(user).toEqual({
      username: myName,
      uid: 'ABC567'
    });
  })
})