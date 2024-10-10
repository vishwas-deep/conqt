import React from 'react'

const InputField = ({label,type = 'text', required =false, ...props}) => {

  return (
    <div>
        <label>{label}</label>
        <input type ={type} required ={required} {...props}/>
    </div>
  )
}

export default InputField