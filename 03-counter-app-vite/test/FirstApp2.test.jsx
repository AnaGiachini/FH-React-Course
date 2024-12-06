import React from 'react';
import { FirstApp } from '../src/FirstApp.jsx';
import { render, screen } from '@testing-library/react';



  describe('Pruebas en FirstApp2', () => {

    const title = 'Ana Giachini';
    const subtitle = 'No hay sub';
  
    test('debe hacer match con el snapshot', () => {
  
      const { container } = render(<FirstApp title={ title } />);
      expect(container).toMatchSnapshot();
  
    });
  
    test('debe mostrar el titulo', () => {
  
      render(<FirstApp title={ title } />);
      expect( screen.getByText( title ) ).toBeTruthy();
  
    });
  
    test('debe mostrar el titulo en h1', () => {
      render(<FirstApp title={ title } />);
      expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain( title );
    });

    test('debe mostrar el subtitulo', () => {
      render(<FirstApp subtitle={ subtitle } />);
      expect( screen.getAllByText( subtitle ).length ).toBe(1);
    });

  });
