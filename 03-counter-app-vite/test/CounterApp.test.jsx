import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('pruebas sobre CounterApp', () => { 
  
  const initialValue = 10;
  test('debe hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={1}/>);
    expect(container).toMatchSnapshot();

  });

  test('debe mostrar el valor inicial de 100', () => {
    
    render(<CounterApp value={100}/>);
    expect(screen.getByText(100)).toBeTruthy();

  });

  test('debe incrementar el valor con el boton +1', () => {
    
    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    expect(screen.getByText(initialValue+1)).toBeTruthy();

  });

  test('debe decrementar el valor con el boton -1', () => {
    
    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByRole('button', { name: 'des' }));
    // screen.debug();
    expect(screen.getByText(initialValue-1)).toBeTruthy();

  });

  test('debe funcionar el boton reset', () => {
    
    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByRole('button', { name: 'reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();

  });
});