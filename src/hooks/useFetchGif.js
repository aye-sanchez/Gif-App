import React, { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGif = (category) => {

    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true); //para barra de loadin mientras cargan las imagenes//
  
    const getImages = async () => {
      
        const newImages = await getGifs(category);
            setImagenes(newImages); //para barra de loadin mientras cargan las imagenes//
            setLoading(false); //para barra de loadin mientras cargan las imagenes//
    }
  
      
      useEffect ( () => {
        getImages();
      }, [])
  
   
  return{
    imagenes: imagenes, //por propiedad como son iguales también se podría escribir imagenes,//
    loading: loading


  };
}
