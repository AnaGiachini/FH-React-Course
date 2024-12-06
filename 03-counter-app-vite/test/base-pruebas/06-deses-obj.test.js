import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba en 06-deses-obj', () => {

  test('usContect debe retornar un objeto', () => {

    const clave = 'Ironman';
    const edad = 45;
    const testContext = usContext({ clave, edad });

    expect(testContext).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    }); 
  })
}) 
