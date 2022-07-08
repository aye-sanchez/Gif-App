import React from 'react'
import { useState } from 'react'


export const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
       
      }

    const handleSumit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 1) return;

        addCategory(inputValue.trim())  //el metodo trim elimina los espacios adelante y atras de la palabra//
       
        setInputValue('')

    }  

  return (
    <form onSubmit = {handleSumit}>
        <input
            type = {'text'}
            placeholder = {'Buscar Gif'}
            value = {inputValue}
            onChange = {handleInputChange}
        />
    </form>
  )
}
