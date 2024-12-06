
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Ana';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );