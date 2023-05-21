import React from 'react';
import wonner from '../../../assets/woner.jpg'
import sp1 from '../../../assets/specilist/sp5.jpg';
import sp2 from '../../../assets/specilist/sp2.jpg';
import sp3 from '../../../assets/specilist/sp3.jpg';
import sp4 from '../../../assets/specilist/sp4.jpg';
const Best = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div >
                    <img className='w-[480px] p-5   ' src={wonner} alt="" />
                    <h1 className='text-3xl my-3 font-bold'>Jacky Chan </h1>
                    <p className='text-1xl font-bold'>CEO Of AniToy Company Ltd.</p>
                    <p className='text-1xl my-3 font-bold'>Contact: +08016864856684</p>
                    <a className='text-1xl font-bold' href="#">Email: abc@gmail.com</a>
                </div>
                <div>
                    <h2 className='text-4xl font-bold  my-4 '>What Do We Best</h2>
                    <p className='p-4 font-semibold'>
                        We specialize in creating the best toys that bring joy, imagination, and learning to children of all ages. Our toy making process combines innovative design, high-quality materials, and meticulous craftsmanship to ensure that every toy we produce is safe, durable, and engaging. From interactive electronic toys to classic wooden puzzles, we strive to create products that spark creativity, promote cognitive development, and provide hours of entertainment. Our commitment to excellence drives us to continually explore new concepts, incorporate feedback from parents and children, and stay up-to-date with the latest trends in toy making. Whether it's a cuddly plush toy, a challenging building set, or an educational board game, our aim is to make toys that inspire play, encourage exploration, and create unforgettable childhood memories.</p>
                </div>
                <div>
                    <h2 className='text-4xl font-bold text-center my-3'>Our Specialist</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-white'>
                        <div className=' bg-custom-navy rounded-lg  hover:bg-purple-700'>
                            <img className=' w-[200px] h-[180px]  p-4' src={sp1} alt="" />
                            <h1 className='text-2xl font-semibold ml-4'>Chuhan Zhang </h1>
                            <p className='font-semibold p-4'>Product Manager</p>
                        </div>
                        <div  className=' bg-custom-navy rounded-lg  hover:bg-purple-700'>
                            <img className='w-[200px] h-[180px]  p-4' src={sp2} alt="" />
                            <h1 className='text-2xl font-semibold ml-4'>Liu Wei</h1>
                            <p className='font-semibold p-4'>Marketing Manager</p>
                        </div >
                        <div  className=' bg-custom-navy rounded-lg  hover:bg-purple-700'>
                            <img className='w-[200px] h-[180px]  p-4' src={sp3} alt="" />
                            <h1 className='text-2xl font-semibold ml-4'>Tessy Siun</h1>
                            <p className='font-semibold p-4'>Quality Assurance Specialist</p>
                        </div>
                        <div  className=' bg-custom-navy rounded-lg  hover:bg-purple-700'>
                            <img className='w-[200px] h-[180px]  p-4' src={sp4} alt="" />
                            <h1 className='text-2xl font-semibold ml-4'>Lucky Lam</h1>
                            <p className='font-semibold p-4'>Product Designer</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;