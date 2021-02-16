import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './UserForm.css';
import { getFormField } from '../../../redux/actions/userFormAction';
import { InputField } from './childrenComponents/InputField';

const UserForm = () => {
    const dispatch = useDispatch();
    const fields = useSelector(state => state.userForm.formFields);

    useEffect(() => {
        dispatch(getFormField());
    }, []);

    const getFieldConfig = (name) => {
        return fields.find(field => field.name === name);
    }


    const userFormSchema = yup.object().shape({
        first_name: yup.string(),
        last_name: yup.string(),
        company: yup.string(),
        job_title: yup.string(),
        email: yup.string().email().required('Email is required!'),
        agree: yup.string(),
        submission: yup.boolean(),
    });

      
    const userForm = useFormik({
        initialValues: {
            first_name: '', 
            last_name: '',
            company: '',
            job_title: '',
            email: '',
            agree: 'no',
            submission: false,
        },
        validationSchema: userFormSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });


    const { 
        values, 
        handleChange, 
        handleSubmit, 
        handleBlur, 
        errors, 
        touched, 
        handleReset, 
        isValid 
    } = userForm;

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between'>
                <div className='top_parts_block'>
                    <div className='input_block'>
                        <InputField 
                            name={'first_name'}
                            value={values.first_name}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            error={touched.first_name ? errors.first_name : undefined}
                            config={getFieldConfig('first_name')} 
                        />
                    </div>
                    <div className='input_block'>
                        <InputField 
                            name={'last_name'}
                            value={values.last_name}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            error={touched.last_name ? errors.last_name : undefined}
                            config={getFieldConfig('last_name')} 
                        />
                    </div>
                </div>
                <div className='top_parts_block'>
                    <div className='input_block'>
                        <InputField 
                            name={'company'}
                            value={values.company}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            error={touched.company ? errors.company : undefined}
                            config={getFieldConfig('company')} 
                        />
                    </div>
                    <div className='input_block'>
                        <InputField 
                            name={'job_title'}
                            value={values.job_title}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            error={touched.job_title ? errors.job_title : undefined}
                            config={getFieldConfig('job_title')} 
                        />
                    </div>
                </div>
            </div>
            <div className='input_block'>
                <InputField 
                    name={'email'}
                    value={values.email}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    error={touched.email ? errors.email : undefined}
                    config={getFieldConfig('email')} 
                />
            </div>
            <div>
                <div className='mt-2'>
                    I agree to receive 
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mt-2'>
                        <label>
                            <span className='mr-3'>
                                <input 
                                    name={'agree'} 
                                    onChange={handleChange}
                                    value={'yes'} 
                                    type="radio"
                                    checked={values.agree === 'yes'}
                                />
                            </span>
                            <span>
                                Yes
                            </span>
                        </label>
                    </div>
                    <div  className='d-flex align-items-center mt-2'>
                        <label>
                            <span className='mr-3'>
                                <input 
                                    name={'agree'} 
                                    onChange={handleChange}
                                    value={'no'}
                                    type="radio"
                                    checked={values.agree === 'no'}
                                />
                            </span>
                            <span>
                                No
                            </span>
                        </label>
                    </div>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <label>
                        <input 
                            name={'submission'} 
                            value={values.submission} 
                            checked={values.submission}
                            onChange={handleChange}
                            type="checkbox"
                            className='mr-3' 
                        />
                            The submission of personal information 
                    </label>
                </div>
                {isValid && <h2>Form is Valid</h2>}
                <div className="mt-4 d-flex justify-content-end">
                    <button 
                        className="btn btn-outline-danger mr-2"
                        type='button'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        className="btn btn-info"
                        type='submit'
                        disabled={!isValid}
                        onSubmit={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>

    )
}

export { UserForm };