import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import '../Register/Register.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const onSubmit = data => {
        const { email, password } = data;
        // console.log(data);

        signInWithEmailAndPassword(email, password);
    }
    // console.log(errors);

    return (
        <div className='auth-width bg-light mx-auto rounded py-4 my-5 shadow-sm'>
            <h2 className='mb-0 text-capitalize'>Login your Account</h2>
            <SocialLogin></SocialLogin>
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
                    className='py-2 px-2 mb-2 rounded border-0'
                    placeholder='Password'
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
                            message: "At least one [a-z][A-Z][0-9][!@#$%^&*] from each categories"
                        }
                    })}
                />
                {
                    loading && <p className='text-danger'>Loading...</p>
                }
                {
                    error && <p className='text-danger'>{error.message}</p>
                }
                <p className='text-danger'>{errors?.password?.message}</p>
                <input
                    className='py-2 px-2 rounded bg-primary text-white fw-semibold border-0'
                    type="submit"
                    value="Login"
                />
                <p className='d-flex align-items-center justify-content-between text-primary'>
                    <Link className='text-decoration-none' to='/register'>Register?</Link>
                    <Link className='text-decoration-none' to='/retrieve-password'>Forgot Password?</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;