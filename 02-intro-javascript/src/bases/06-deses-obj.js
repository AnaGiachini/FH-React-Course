// Destructuracion

const persona = { 
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const userContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.323
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);