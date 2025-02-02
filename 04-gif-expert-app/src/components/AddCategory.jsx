import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { onNewCategory } ) => {

  //Hooks para manejar lo que ingresan en el input
  const [ inputValue, setInputValue ] = useState('');

  // Target me permite capturar lo que el usuario teclea en el input
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory(inputValue.trim());
    //limpio el input
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Buscar Gif" value={ inputValue } onChange={ onInputChange } />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};