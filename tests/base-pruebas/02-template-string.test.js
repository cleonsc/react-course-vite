import { getGreeting } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => { 
  test('getGreeting should return "Hola César"', () => {
    const myName = 'César';
    const  message = getGreeting(myName);
    expect(message).toBe(`Hola ${myName}`);
  })
 })