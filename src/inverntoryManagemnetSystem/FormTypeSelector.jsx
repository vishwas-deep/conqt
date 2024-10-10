import React from 'react'
import './formTypeSelector.css'

const FormTypeSelector = ({ formType, onChange }) => {
    return (
        <div className='formTypeSelector'>
            <div className='formTypeSelector--navBar'>
                <h1>Inventory Management System</h1>
                <span>home</span>
            </div>

            <label>
                <input type='radio'
                    value='item'
                    checked={formType === 'item'}
                    onChange={onChange}
                />
                Item
            </label>
            <label>

                <input type='radio'
                    value='supplier'
                    checked={formType === 'supplier'}
                    onChange={onChange}
                />
                Supplier
            </label>
        </div>
    )
}

export default FormTypeSelector