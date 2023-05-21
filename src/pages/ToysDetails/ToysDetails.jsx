import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const ToysDetails = () => {
    const toys = useLoaderData();
    console.log(toys)
    const { _id, toy_name, seller_name, price, quantity, rating, description, status, category, postedBy, photoUrl, deadline } = toys
    return (



        <div>
            <Navbar/>
            <div className="">
                <div className=" grid grid-cols-1 md:grid-cols-2 bg-custom-navy my-8 rounded-3xl ">
                    <img src={photoUrl} className=" rounded-lg shadow-2xl" />
                    <div className='space-y-5 mt-24 ml-7 text-white font-semibold'>
                        <h1 className="text-5xl  font-semibold">Toy Name: {toy_name}</h1>
                        <h2 className="text-3xl  font-semibold">Seller Name: {seller_name}</h2>
                        <p className=" font-semibold text-2xl">Quantity: {quantity} Pcs </p>
                        <p className=" font-semibold text-2xl ">Price:  {price} TK.</p>
                        <p className=" font-semibold text-2xl ">Seller Email:  {postedBy}</p>
                        <p className=" font-semibold text-2xl">{description} </p>

                        <p className=" font-semibold text-2xl">
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={FaRegStar}
                                placeholderSymbol={ FaStar}
                                fullSymbol={FaStar}
                            />
                            Rating: {rating} Star</p>
                        <div className='flex justify-between items-center'>

                        </div>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ToysDetails;