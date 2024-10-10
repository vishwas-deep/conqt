import React from 'react'
import InputField from './InputField'

const ItemDetails = () => {
  return (
    <div>
        <InputField label = 'item Name' required/>
        <InputField label = 'Quantity' type = 'number' required/>
        <InputField label = 'Unit Price' type ='number' required/>
        <InputField label = 'Date of Submission' type ='date' required/>
    </div>
  )
}

export default ItemDetails