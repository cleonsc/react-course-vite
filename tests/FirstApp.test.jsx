import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  test('should match with the snapshot', () => {
    const title = 'Hola, soy Goku';

    // Renderizamos el componente:
    const { container } = render(<FirstApp title={title} />);

    // compara contra una foto que se guarda en __snapshots__
    expect(container).toMatchSnapshot();
  })

  test('should show a title in  and h1 tag ', () => {
    const title = 'Hola, soy Goku';

    // Renderizamos el componente:
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1')
    expect(h1.innerHTML).toContain(title)
  })
})
