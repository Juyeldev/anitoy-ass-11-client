import React from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({ toy, index}) => {
    const {  _id, toy_name, seller_name, price, quantity, rating, description, status, category, postedBy, photoUrl, deadline } = toy
    console.log(index)
    return (
        <tr>
            <td className='border-blue-500 font-bold'>{index+1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircircle w-12 h-12">
                            <img src={toy.photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='border-blue-500 font-bold'>{seller_name}</td>
            <td className='border-blue-500 font-bold'>{toy_name} </td>
            <td className='border-blue-500 font-bold'>{category} </td>
            <td className='border-blue-500 font-bold'>{price} TK.</td>
            <td className='border-blue-500 font-bold'>{quantity} Pcs</td>
            <td className='border-blue-500 font-bold'>
                <button className='btn btn-primary'><Link to={`/toyDetails/${_id}`} >View Details</Link></button>
            </td>
        </tr>
    );
};

export default AllToy;