import { getHeroById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas 08-imp-exp', () => {
  test('getHeroById should return an hero by its ID', () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getHeroById should return undefined if the hero does not exists', () => {
    const id = 100;
    const hero = getHeroById(id);

    expect(hero).toBeUndefined();
    expect(hero).toBeFalsy()
  });

  //TODO: tarea: 
  /**
   * Debe retornar un arreglo con los heroes de DC
   * Length === 3
   * toEqual al arreglo filtrado
   * 
   * debe de retornar un arreglo con los héroes de Marvel
   * Length === 2
   */

  test('getHeroesByOwner should return all heroes that belongs to DC', () => {
    const owner = 'DC';
    const heroesResponse = getHeroesByOwner(owner);

    expect(heroesResponse).toHaveLength(3);
    
    //opcion 1 - hard-code data
    expect(heroesResponse).toEqual([
      { id: 1, name: 'Batman', owner },
      { id: 3, name: 'Superman', owner },
      { id: 4, name: 'Flash', owner }
    ])

    //opcion 2 - felxible
    expect(heroesResponse).toEqual(heroes.filter(hero => hero.owner === owner));
  });

  test('getHeroesByOwner should return all heroes that belongs to Marvel', () => {
    const owner = 'Marvel';
    const heroesResponse = getHeroesByOwner('Marvel');

    expect(heroesResponse).toHaveLength(2);

    //opcion 1 - hard-code data
    expect(heroesResponse).toEqual([
      { id: 2, name: 'Spiderman', owner },
      { id: 5, name: 'Wolverine', owner }
    ])

     //opcion 2 - felxible
     expect(heroesResponse).toEqual(heroesResponse.filter(hero => hero.owner === owner));
  });
})