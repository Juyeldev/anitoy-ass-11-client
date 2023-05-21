import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';



const AddToys = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://assignment-11-server-ashy.vercel.app/postToy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success',
                    text: 'Toy Add Success',
                    icon: 'success',
                    confirmButtonText: 'Yes, Added it!'
                })
            })
    };

    return (
       <div>
        <Navbar/>
         <div className=' mt-5'>
            <div className='w-5/6 mx-auto '>
                <form className=' bg-custom-navy p-12 rounded-3xl ' onSubmit={handleSubmit(onSubmit)} >
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("toy_name")}
                            placeholder="Toy Name"
                          
                        />

                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("seller_name", { required: true })}
                            placeholder="Seller Name"
                            type="text"
                        />
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("photoUrl", { required: true })}
                            placeholder="Photo url"
                            type='url'
                        />
                        <select className=" p-4 border-4 rounded-2xl" {...register("category")}>
                            <option value="Bear">Bear Toy</option>
                            <option value="Horse">Horse Toy</option>
                            <option value="Tiger">Tiger Toy</option>

                        </select>
                        {/* <select className="w-5/6 p-4 border-4 rounded-2xl" {...register("status")}>
                            <option value="Bear">Bear</option>
                            <option value="Horse">Horse</option>
                            <option value="Tiger">Tiger</option>
                        </select> */}
                        <input
                            className=" p-4 border-4 rounded-2xl"

                            {...register("postedBy")}
                            placeholder="your email"
                            type="email"

                        />
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="text"
                        />
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("quantity", { required: true })}
                            placeholder="Available Quantity"
                            type="number"

                        />
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("rating", { required: true })}
                            placeholder="Rating"

                        />
                        <input
                            className=" p-4 border-4 rounded-2xl"
                            {...register("deadline")}
                            placeholder="deadline"
                            type="date"
                        />

                        <input
                            className=" h-[100px] p-4 border-4 rounded-2xl"
                            {...register("description")}
                            placeholder="description"
                        />
                    </div>
                    <div className='bg-custom-blue text-white w-1/4 mx-auto p-4 text-center my-7 hover:bg-purple-500 rounded-lg'>
                        <input className="text-center  text-3xl  cursor-pointer" value="Add Toy" type="submit" />
                    </div>
                </form>

            </div>
        </div>
        <Footer/>
       </div>
    );
};

export default AddToys;