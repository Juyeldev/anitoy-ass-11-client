import React from 'react';
import { Link, } from 'react-router-dom';



const Toy = ({ toy }) => {
    const { _id, toy_name, seller_name, description, photoUrl, quantity, price, rating, email, category, postedBy } = toy || {};

    return (
        <div>
            <div className='flex justify-between items-center  bg-custom-navy rounded-2xl'>
                <div className='w-full  text-white space-y-6 ml-2 p-1'>
                    <h2 className='text-4xl font-semibold'>{toy_name}</h2>
                    <p className='text-2xl'>Price: {price}</p>
                    <p className='text-1xl'>Rating: {rating} Star</p>

                    <button className='btn btn-primary '> <Link to={`/toyDetails/${_id}`}>View Detail</Link></button>
                </div>
                <div>
                    <img className='w-[90%]  my-4 rounded-lg' src={photoUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Toy;