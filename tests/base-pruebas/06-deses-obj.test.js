import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('usContext should return an object', () => {
    const testObj = {
      nombreClave: 'ABC123',
      anios: 35,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
  }

    const obj = usContext({clave: 'ABC123', edad: 35});
    expect(testObj).toStrictEqual(obj);
  })
})