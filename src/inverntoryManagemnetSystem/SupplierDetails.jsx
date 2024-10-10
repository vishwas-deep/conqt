import React from 'react'
import InputField from './InputField'

const SupplierDetails = () => {
  return (
    <>
        <InputField label = 'supplier Name' required />
        <InputField label = 'supplier Name' required />
        <div>
            <labe>Country</labe>
            <select required>
                <option value = ''>Select Country</option>
                <option value = 'USA'>USA</option>  
            </select>
        </div>
        <div>
            <label>State</label>
            <select required>
            <option value = ''>Select State</option>
            <option value = 'Florida'>Florida</option>  
            </select>
        </div>
        <div>
            <InputField label = 'City' required/>
            <InputField label = 'Eail Address' type='email' required/>
        </div>
    </>
  )
}

export default SupplierDetails