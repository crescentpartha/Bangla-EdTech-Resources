import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../Register/Register.css';

const RetrievePassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    // console.log(errors);

    return (
        <div className='auth-width bg-light mx-auto rounded py-4 my-5 shadow-sm'>
            <h2 className='mb-4 text-capitalize'>Forgot your Password?</h2>
            <form className='form-width d-flex flex-column gap-1' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='py-2 px-2 mb-2 rounded border-0'
                    placeholder='Email'
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email is invalid"
                        }
                    })}
                />
                <p className='text-danger'>{errors?.email?.message}</p>
                <input
                    className='py-2 px-2 rounded bg-primary text-white fw-semibold border-0'
                    type="submit"
                    value="Submit"
                />
                <p className='d-flex align-items-center justify-content-between text-primary'>
                    <Link className='text-decoration-none' to='/register'>Register?</Link>
                    <Link className='text-decoration-none' to='/login'>Login?</Link>
                </p>
            </form>
        </div>
    );
};

export default RetrievePassword;