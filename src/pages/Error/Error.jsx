import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
                <img className='w-96 rounded-lg' src={error} alt="" />
                <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                    <span className=''>Page Not Founded</span>
                </h2>
                <Link to='/' className='btn bg-primary'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;