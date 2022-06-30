import { getHeroById } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () =>  {
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( `No se pudo encontrar el héroe con el ID ${id}` );
            }
        }, 1000 )
    });
}
