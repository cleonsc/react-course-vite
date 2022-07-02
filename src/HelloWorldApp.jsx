//TODO: primera opcion
/* function HelloWorldApp() {
    return (
        <h1>Hola mundo!!!</h1>
    )
}

export default HelloWorldApp;
 */

//TODO: segunda opcion, 
// tener en cuenta q no hace falta la importacion 
// de react

import React from 'react' 

export const HelloWorldApp = () => {
  return (
    <h1>Hello World App</h1>
  )
}

//TODO: tercera opcion
// export const HelloWorldApp = () => <h1>Hello World App</h1>