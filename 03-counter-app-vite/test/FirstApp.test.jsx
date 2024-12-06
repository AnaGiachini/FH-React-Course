import React from 'react';
import { FirstApp } from '../src/FirstApp.jsx';
import { render } from "@testing-library/react";

describe('Pruebas en FirstApp', () => {

  // test('Debe de hacer match con el snapshot', () => {

  //   const title = 'Prueba de title';
  //   const { container } = render( <FirstApp title={ title } /> );
    
  //   expect(container).toMatchSnapshot();

  // });

  test('Debe de mostrar el titulo', () => {
    
    const title = 'Ana Giachini';
    const { container,getByText, getByTestId } = render( <FirstApp title={ title } /> );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect( getByTestId('test-title').innerHTML ).toContain(title);

  });

  test('Debe de mostrar el subtitulo', () => {
    
    const subtitle = 'No hay sub';
    const { container,getByText } = render( <FirstApp subtitle={ subtitle } /> );

    expect(getByText(subtitle)).toBeTruthy();
  });
});