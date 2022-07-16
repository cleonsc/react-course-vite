import React from 'react';
import { render, screen } from '@testing-library/react';
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
    expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100');
  });
})