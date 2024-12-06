// Objeto Literal

const persona = {
  nombre: 'Ana',
  apellido: 'Giachini',
  edad: 41,
  direccion: {
    ciudad: 'Aarhus',
    zip: 8260,
    lat: 56.162939,
    lng: 10.203921,
  },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Anto';

console.log(persona);
console.log(persona2);