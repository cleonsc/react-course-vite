import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';


describe('Pruebas <CounterApp />', () => {
  const initialValue = 10;

  test('should match with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the initial value equal to 100, <CounterApp value={initialValue} />', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
  });

  /*
   *SIMULACIÓN DE EVENTOS 
   */
  describe('Events simutation in CounterApp component', () => {
    test('it should increment with the button "+1"', () => {
      // inicializo mi sujeto de pruebas
      render(<CounterApp value={initialValue} />);

      // disparar un evento, para ello usamos fireEvent
      fireEvent.click(screen.getByText('+1'))
      expect(screen.getByText('11')).toBeTruthy();
    })

    test('it should decremetn with the button "--1"', () => {
      // inicializo mi sujeto de pruebas
      render(<CounterApp value={initialValue} />);

      // disparar un evento, para ello usamos fireEvent
      fireEvent.click(screen.getByText('-1'))

      //permite ver el estado del DOM
      // screen.debug();

      expect(screen.getByText('9')).toBeTruthy();
    })

    test('it should work the button RESET', () => {
      render(<CounterApp value={355}/>)
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      // screen.debug();
      // fireEvent.click(screen.getByText('Reset'));
      fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
      expect(screen.getByText(355)).toBeTruthy();

    })
  })
})