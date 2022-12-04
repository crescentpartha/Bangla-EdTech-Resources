import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    return (
        <div className='form-width d-flex flex-column flex-nowrap items-center justify-center my-4'>
            <button onClick={() => signInWithGoogle()} className='d-flex align-items-center justify-content-center gap-3 bg-primary py-2 mx-auto my-4 rounded w-100 border-0'>
                <img width={25} src={google} alt="google logo" />
                <span className='text-white fw-semibold text-uppercase'>Google</span>
            </button>

            { error && <p className='text-danger'>{error.message}</p>}
            { loading && <p className='text-danger'>Loading...</p>}

            <div className='d-flex flex-row flex-nowrap items-center justify-center'>
                <hr width='' className='h-1 w-100' />
                <p className='mx-2 mb-0 mt-1 text-secondary text-lg font-semibold'>or</p>
                <hr width='' className='h-1 w-100' />
            </div>
        </div>
    );
};

export default SocialLogin;