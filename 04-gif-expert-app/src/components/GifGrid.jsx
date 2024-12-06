
import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {

  getGifs(category);
 
  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired, // Define el tipo y que es obligatorio
};