import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const handleAddCategory = (value) => {
        setCategories([value, ...categories])
        
    }

    const handleRemoveAll = () => {
      setCategories(['']);
    };

    const handleRemove =  index => {
      const value = [...categories];
      value.splice(index, 1);
      setCategories(value);
    };
  
    return (
    <>
      {/* Titulo */}
        <img src =  'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2021/02/gipsi-gif-logo.gif' width='50%'/>
                
      {/* Input */}
        <AddCategory addCategory = {handleAddCategory}/>
        <button className="delete" onClick={handleRemoveAll}>
                    Limpiar todo
                </button>  
      {/* Listado de Gif */}             
        
            {categories.map((category) => (
             <> <button className="delete" onClick={handleRemove}>Eliminar: {category}</button>
            <GifGrid key = {category} category = {category} removeCategory={handleRemove}/></>
          ))}
            
      

    </>
  );
};
