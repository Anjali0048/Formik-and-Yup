import * as Yup from "yup";

export const signUpSchema = Yup.object({

    firstName: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    age: Yup.string().required('Age is required'),
    ageBelow18 : Yup.number().when('age',{
        is: 'below18',
        then: () => Yup.number().min(1).max(17).required('Age is required')
    }),
    license: Yup.string().when('age',{
        is: 'above18',
        then: () => Yup.string().required( 'license is required')
    }),
    licenseNumber: Yup.string().when(['age','license'],{
        is: (age, license) => age === 'above18' && license==='yes',
        then: () => Yup.string().required('License number is required'),
    }),
    applyForLicense: Yup.boolean().when(['age','license'],{
        is: (age, license) => age === 'above18' && license==='no',
        then: () => Yup.boolean().oneOf([true], 'Apply for license is required')
    }),

    aadhar: Yup.string().when(['age','license','applyForLicense'],{
        is: (age, license, applyForLicense) => age === 'above18' && license==='no' && applyForLicense,
        then: () => Yup.string().required('aadhar no. is required'),
    }),
    address: Yup.string().when(['age','license','applyForLicense'],{
        is: (age, license,applyForLicense) => age === 'above18' && license==='no' && applyForLicense,
        then: () => Yup.string().required('address is required'),
    }),
    
    phone : Yup.string().matches(/^[6-9]\d{9}$/, 'Phone number is not valid').required('Phone number is required'),
    password: Yup.string().min(6).required("Please enter your password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
    file: Yup.mixed().required('File is required')

});