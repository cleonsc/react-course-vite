import React from 'react';
import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  const title = 'Hola, soy Goku';
  const subtitle = 'Soy un subtitulo';

  test('should match with the snapshot', () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  })

  test('should show the message "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug()
  })

  test('should show the title in a tag h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })

  test('should show the subtitle sending by props', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subtitle}
      />
    );
    
    expect(screen.getAllByText(subtitle).length).toBe(2)
  })
})
