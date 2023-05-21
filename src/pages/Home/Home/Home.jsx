import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import OurService from './OurService/OurService';
import Marquee from "react-fast-marquee";
import bear1 from '../../../assets/sider-img/bear1.jpg';
import bear2 from '../../../assets/sider-img/bear2.jpg';
import bear3 from '../../../assets/sider-img/bear3.jpg';
import bear4 from '../../../assets/sider-img/bear4.jpg';
import bear5 from '../../../assets/sider-img/bear5.jpg';
import tiger1 from '../../../assets/sider-img/tiger1.jpg';
import tiger2 from '../../../assets/sider-img/tiger2.jpg';
import tiger3 from '../../../assets/sider-img/tiger3.jpg';
import tiger4 from '../../../assets/sider-img/tiger4.jpg';
import tiger5 from '../../../assets/sider-img/tiger5.jpg';
import horse1 from '../../../assets/sider-img/horse1.jpg';
import horse2 from '../../../assets/sider-img/horse2.jpg';
import horse3 from '../../../assets/sider-img/horse3.jpg';
import horse4 from '../../../assets/sider-img/horse4.jpg';
import horse5 from '../../../assets/sider-img/horse5.jpg';
import Best from '../Best/Best';
import Navbar from '../../../shared/Navbar/Navbar';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='space-y-9'>

                <Banner></Banner>
                <Marquee className='space-x-8'>
                    <img className='w-[100px]' src={bear1} alt="" />
                    <img className='w-[100px]' src={tiger1} alt="" />
                    <img className='w-[100px]' src={horse1} alt="" />
                    <img className='w-[100px]' src={bear2} alt="" />
                    <img className='w-[100px]' src={tiger2} alt="" />
                    <img className='w-[100px]' src={horse2} alt="" />
                    <img className='w-[100px]' src={bear3} alt="" />
                    <img className='w-[100px]' src={tiger3} alt="" />
                    <img className='w-[100px]' src={horse3} alt="" />
                    <img className='w-[100px]' src={bear4} alt="" />
                    <img className='w-[100px]' src={tiger4} alt="" />
                    <img className='w-[100px]' src={horse4} alt="" />
                    <img className='w-[100px]' src={bear5} alt="" />
                    <img className='w-[100px]' src={tiger5} alt="" />
                    <img className='w-[100px]' src={horse5} alt="" />
                    <img className='w-[100px]' src={bear2} alt="" />

                </Marquee>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <OurService></OurService>
                <Best></Best>

            </div>
            <Footer />
        </div>
    );
};

export default Home;