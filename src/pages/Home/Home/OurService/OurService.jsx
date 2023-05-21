import React from 'react';
import { FaBook, FaIceCream, FaMugHot, FaUtensils } from 'react-icons/fa';
import delivery from '../../../../assets/delivery.jpg'
import unique from '../../../../assets/unique.jpg'
import premium from '../../../../assets/premium.avif'
import cash from '../../../../assets/cash.png'

const OurService = () => {
    return (
        <div className=' my-20  rounded-xl '>
            <h2 className='text-4xl text-center font-semibold p-3 '>Our Premium Services</h2>
            <p className='text-1xl text-center font-semibold p-5 w-3/5 mx-auto'>Our premium services guarantee exceptional quality and on-time delivery, going above and beyond to exceed your expectations. With meticulous attention to detail, we ensure that your experience is nothing short of extraordinary.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4  '>
                <div className='bg-custom-navy text-center text-white p-4 rounded-lg  hover:bg-purple-700'>
                    {/* <FaBook className='text-7xl ml-24 '></FaBook> */}
                    <img className='mx-auto rounded-xl' src={delivery} alt="" />
                    <div>
                        <h5 className='py-4 text-2xl'>On Time Delivery</h5>
                        <p>"We guarantee on-time delivery, fulfilling your requirements promptly and efficiently. Our commitment is rooted in delivering exceptional service, meeting deadlines with unwavering dedication."!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-center text-white p-4 rounded-lg  hover:bg-purple-700'>
                    <img className='mx-auto rounded-xl' src={unique} alt="" />
                    <div>
                        <h5 className='py-4 text-2xl'>Unique Design</h5>
                        <p>"Our unwavering commitment is to deliver unique designs that captivate and inspire With meticulous attention to detail and creative expertise, we strive to create designs that stand out, leaving a lasting impression."!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-white text-center p-4 rounded-lg  hover:bg-purple-700'>
                    <img className='mx-auto rounded-xl w-[200px] h-[130px]' src={premium} alt="" />
                    <div>
                        <h5 className='py-4 text-2xl'>Premium Quality</h5>
                        <p>"Our unwavering commitment is to consistently deliver premium quality products/services, exceeding your expectations through meticulous craftsmanship and rigorous quality control processes."!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-white text-center p-4 rounded-lg  hover:bg-purple-700 '>
                    <img className='mx-auto rounded-xl  w-[200px] h-[130px]' src={cash} alt="" />
                    <div>
                        <h5 className='py-4 text-2xl'>Cash Back System</h5>
                        <p>"Our commitment to our Cash Back System is simple: Delivering satisfaction and value. If you're not completely happy, we guarantee a hassle-free experience, ensuring you receive a cash back refund within a timely manner."!</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurService;