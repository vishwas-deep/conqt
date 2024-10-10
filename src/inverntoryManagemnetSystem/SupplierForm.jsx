import React, { useState } from 'react'
import FormTypeSelector from './FormTypeSelector';
import SupplierDetails from './SupplierDetails';
import ItemDetails from './ItemDetails';
import './supplierForm.css'

const SupplierForm = () => {


    const [formType, setFormType] = useState('item');


    const handleRadioChange = (event) => {
        setFormType(event.target.value);
    }
    return (
        <div className='form-container'>
            <FormTypeSelector 
            formType = {formType}  
            onChange = {handleRadioChange}
            />
            <h2>{formType === 'supplier' ? 'supplierDetails' : 'ItemDetaila'}</h2>
            <form>
                {formType === 'supplier' ? <SupplierDetails /> : <ItemDetails />}
                <button type ='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SupplierForm