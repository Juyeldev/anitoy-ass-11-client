import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from '../Home/Toy/Toy';
import './ShopByCategory.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState(" sdhd ");
    const [limit, setLimit] = useState(10);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    useEffect(() => {
        fetch(`https://assignment-11-server-ashy.vercel.app/allToy/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [activeTab])

  

    return (
        <div className='mt-16 space-y-7 rounded-xl'>
            <h1 className='text-5xl text-center text-blue-800  font-bold underline  mt-24'>Shop By Category</h1>
            <div className='text-center mx-auto  mt-10'>



                <div className="tabs flex justify-center items-center cursor-pointer  ">
                    <div
                        onClick={() => handleTabClick("Bear")}
                        className={`  text-2xl rounded underline font-bold  p-5  Bear ${activeTab == "Bear" ? " bg-blue-600 text-white" : ""}`}>
                        Bear
                    </div>
                    <div
                        onClick={() => handleTabClick("Horse")}
                        className={` text-2xl rounded underline p-4 font-bold Horse ${activeTab == "Horse" ? " bg-blue-600 text-white" : "" }`}>
                        Horse
                    </div>
                    <div
                        onClick={() => handleTabClick("Tiger")}
                        className={` text-2xl rounded underline p-4 font-bold Tiger ${activeTab == "Tiger" ? " bg-blue-600 text-white" : "" }`}>
                        Tiger
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
                {
                     toys.slice(0, limit).map(toy => <Toy
                        key={toy._id}
                        toy={toy}></Toy>)
                }
            </div>

            <div className='text-white flex justify-center items-center my-5'>
                {limit < toys.length && (
                    <button className='btn btn-primary' onClick={() => setLimit(limit + 16)}>Show More</button>
                )}
            </div>
        </div>
    );
};

export default ShopByCategory;