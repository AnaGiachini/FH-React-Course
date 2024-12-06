// Promesas
import { getHeroeById } from './bases/08-imp-exp';

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe');
      }
    }, 2000);
  });

}

getHeroeByIdAsync(10)
  .then(console.log)
  .catch(console.warn);