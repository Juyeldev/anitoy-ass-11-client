import React from 'react';
import img1 from '../../../assets/gallery/g1.jpg';
import img2 from '../../../assets/gallery/g2.jpg';
import img3 from '../../../assets/gallery/gh.jpg';
import img4 from '../../../assets/gallery/gh1.jpg';
import img5 from '../../../assets/gallery/gt1.jpg';

const Gallery = () => {
    return (
        <div className=' mt-8 text-center'>
            <h2 className='text-6xl font-bold'>Our Toy Gallery</h2>
            <div className='flex flex-col md:flex-row mt-8 rounded bg-custom-navy '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl '>

                    <img className='h-[250px] rounded-lg p-4' src={img1} alt="" />
                    <img className='h-[250px]  rounded-lg p-4' src={img3} alt="" />
                    <img className='h-[250px]  rounded-lg p-4' src={img4} alt="" />
                    <img className='h-[250px]  rounded-lg p-4' src={img2} alt="" />

                </div>
                <img className='w-1/2 h-[500px] rounded-lg ml-4 p-4' src={img5} alt="" />
            </div>
        </div>
    );
};

export default Gallery;