import React from 'react'
import { useField } from 'formik'

const Radio = ({ ...props}) => {

  const [field,meta] = useField(props);
    return (
    <div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div>
              <label>
                <input
                  type="radio"
                  {...field} {...props}
                />
                {props.value}
              </label>
            </div>

        </div>
    </div>
  )
}

export default Radio
