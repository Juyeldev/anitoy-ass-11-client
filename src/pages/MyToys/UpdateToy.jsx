import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const UpdateToy = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const toys = useLoaderData();
    const { _id, seller_name, price, quantity,  description,  postedBy, } = toys
    const onSubmit = data => {
        console.log(data)
        fetch(`https://assignment-11-server-ashy.vercel.app/postToy/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount < 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy Update Success',
                        icon: 'success',
                        confirmButtonText: 'Yes, Update it!'
                    })
                }  })};

                
    return (
        <div>
            <Navbar/>
            <div className='mt-5'>
                <h2 className='text-center text-5xl my-6 font-bold'>Update Toy Information</h2>
                <div className='mx-auto'>
                    <p className=' text-2xl my-4 font-semibold text-center'>Seller Name: {seller_name}</p>
                    <p className=' text-2xl my-4 font-semibold text-center'>Seller Email: {postedBy}</p>
                    <form className='mx-auto  bg-custom-navy p-8 rounded-3xl w-2/5' onSubmit={handleSubmit(onSubmit)} >
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='grid grid-cols-1 gap-6 mr-2'>

                            <input
                                className="  p-4 border-4 rounded-2xl"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="text"
                                defaultValue={price}
                            />
                            <input
                                className=" p-4 border-4 rounded-2xl"
                                {...register("quantity", { required: true })}
                                placeholder="Available Quantity"
                                type="number"
                                defaultValue={quantity}
                            />
                            <input
                                className=" h-[100px] p-4 border-4 rounded-2xl"
                                {...register("description")}
                                placeholder="description"
                                defaultValue={description}
                            />
                        </div>
                        <div className='bg-custom-blue text-white w-1/3 mx-auto p-4 text-center my-9  hover:bg-purple-500 rounded-lg'>
                            <input className="text-center  text-3xl  cursor-pointer" value="Update" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UpdateToy;