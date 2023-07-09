import React from 'react'
import { useField } from 'formik';

const CheckBox = ({...props}) => {

    const [field, meta] = useField(props);

    return (
    <div>
        <div className="flex justify-center items-center">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            <input
              type="checkbox"
               {...field} {...props}        

            />
              {props.label}
          </label>
        </div>

        {meta.touched && meta.error && <p className="form-error">{meta.error}</p>}
    </div>
  )
}


export default CheckBox
