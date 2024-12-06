import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', () => {
  
  test('retorna un string y un número', () => {

    const [ letters, numbers ] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect( numbers ).toBe(123);

  });
})