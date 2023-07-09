import React from 'react'
import { useField } from 'formik';

// const File = ({label,value,name,placeholder,type,checked, onChange,errors,touched}) => {
const File = ({ onChange, ...props}) => {

    const [field, meta] = useField(props);

    return (
      <div>
    <div className="flex flex-wrap -mx-3 mb-2">
        <div className="flex flex-col w-full md:w-1/2 px-3 mb-6 mt-6 md:mb-0 ">
            <label htmlFor="files" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              {props.label}
            </label>

            <input 
              className='outline-dashed p-2 w-fit'
              type="file" 
              ref={ props.fileRef} 
              onChange={onChange}
            />
      
          </div>
    </div>
            {meta.touched && meta.error && <p className="form-error">{meta.error}</p>}
    </div>
  )
}

export default File
