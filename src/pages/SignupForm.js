import React, { useRef } from 'react'
import {Formik} from "formik"
import { signUpSchema } from '../schemas';
import Input from '../components/Input';
import Radio from '../components/Radio';
import CheckBox from '../components/CheckBox';
import File from '../components/File';

const SignupForm = () => {
  const fileRef = useRef(null);
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          age:"",
          ageBelow18:"",
          license:"",
          applyForLicense: false,
          licenseNumber: "",
          aadhar:"",
          address:"",
          phone:"",
          password: "",
          confirmPassword:"",
          file:null,
        }}
        validationSchema = {signUpSchema}
        onSubmit =  {async (values, action) => {

          action.resetForm()
          fileRef.current.value = null;
          alert("Form submitted Successfully")
          const formData = new FormData();
          formData.append('file', values.file);

          const { confirmPassword, ...otherValues } = values;
          console.log(otherValues)
        }}
        >

        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue
        })=>(
          
          <div className='flex justify-center mt-12'>
          <form onSubmit={handleSubmit} className='w-3/5'>

            <div className='flex flex-wrap -mx-3 mb-6'>
                <Input label="First Name" value={values.firstName} name="firstName" placeholder="Jane" />
                <Input label="email" type="email" value={values.email} name="email" placeholder="jane@gmail.com"/>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="age">
                  Age
                </label>

                <Radio
                  name="age"
                  value="above18"
                  checked={values.age === 'above18'}
                />
                <Radio
                  name="age"
                  value="below18"
                  checked={values.age === 'below18'}
                />
                <br />
              { errors.age && touched.age ? (<p className='form-error'>{errors.age}</p>) : null}
              </div>

              {
                values.age === 'below18' && (
                  <Input label="Enter Your age" type="number" value={values.ageBelow18} name="ageBelow18"/>
                )
              }

              {
                values.age === 'above18' && (
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      Do you have License ?
                    </label>
                    <div>
                      <Radio
                        name="license"
                        value="yes"
                        checked={values.license === 'yes'}
                      />

                    </div>
                    <div>
                      <Radio
                        name="license"
                        value="no"
                        checked={values.license === 'no'}
                      />
                    </div>
                    { errors.license && touched.license ? (<p className='form-error'>{errors.license}</p>) : null}

                  </div>
                )
              }

              {
                values.age === 'above18' && values.license === 'no' && (
                  <div className="">
                    <CheckBox
                      label="Apply For License"
                      name="applyForLicense"
                      checked={values.applyForLicense}
                    />
                   </div>

                )
              }

              {
                values.age === 'above18' && values.license === 'no' && values.applyForLicense && (
                  <>
                    <Input label="Addhaar card no." value={values.aadhar} name="aadhar"/>  
                    <Input label="Address" value={values.address} name="address"/>                  
                  </>
                )
              }


              {values.age === 'above18' && values.license === 'yes' && (
                    <Input label="License Number:" value={values.licenseNumber} name="licenseNumber"/>                  
              )}

              <Input label="Phone No." type="tel" value={values.phone} name="phone"/>                  

            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <Input label="Password" type="password" value={values.password} name="password"/>                            
                <Input label="Confirm Password" type="password" value={values.confirmPassword} name="confirmPassword"/>                  
            </div>

            <div>
                <File fileRef={fileRef} label="Upload File" name="file"
                  onChange={(event) => {
                    setFieldValue('file', event.target.files[0]);
                  }}/>
            </div>

            <button 
                className='bg-[#75cce7] p-2 rounded-md hover:brightness-90 mt-4'
                type='submit' disabled={isSubmitting}
            >
                Submit
            </button>
         </form>
      </div>
        
        )}

      </Formik>
    </div>
  )
}

export default SignupForm
