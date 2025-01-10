import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //Hook para manejar el estado de las categorias
  const [categories, setCategories] = useState(['']);

  //Agrega Categorias
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
