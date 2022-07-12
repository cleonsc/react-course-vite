import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  // test('should match with the snapshot', () => {
  //   const title = 'Hola, soy Goku';

  //   // Renderizamos el componente:
  //   const { container } = render(<FirstApp title={title} />);

  //   // compara contra una foto que se guarda en __snapshots__
  //   expect(container).toMatchSnapshot();
  // })

  //TODO: Comentamos el test con snapshot y presionamos "u" para actualizar

  test('should show a title in  and h1 tag ', () => {
    const title = 'Hola, soy Goku';

    // Renderizamos el componente:
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)

    expect(getByTestId('test-title').innerHTML).toContain(title);
  })

  test('should show the subtitle sending by props', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subtitle}
      />
    )

    expect(getAllByText(subtitle).length).toBe(2)
  })
})
