import React from 'react'
import { useField } from 'formik'

// const Input = ({label,value,name,placeholder,type,checked, onChange,errors,touched}) => {
const Input = ({...props}) => {

    const [field, meta] = useField(props);

    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {props.label}
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                type="text" 
                // placeholder={placeholder}
                // value={value}
                // onChange={onChange}
                // name={name}    
                // checked={checked} 
                {...field} {...props}        
            />
            {meta.touched && meta.error && <p className="form-error">{meta.error}</p>}

        </div>
  )
}

export default Input
