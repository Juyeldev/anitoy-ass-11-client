import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const AllToys = () => {
    // const allToys = useLoaderData()
    const [toys, setToys] = useState([])
    const [searchByName, setSearchByName] = useState('')
    const [limit, setLimit] = useState(20);




    useEffect(() => {
        fetch('https://assignment-11-server-ashy.vercel.app/postToy')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://assignment-11-server-ashy.vercel.app/searchToy/${searchByName}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    return (





        <div>
            <Navbar></Navbar>
            <h2>All Toys</h2>
            <div className='flex justify-center items-center my-8'>
                <input className='p-3 rounded bg-slate-300  w-[250px]'
                    onChange={(e) => setSearchByName(e.target.value)}
                    placeholder='Search by Name'
                    type="text" />{" "}
                <button className='p-3 ml-1 text-white font-bold bg-blue-600  rounded hover:bg-violet-600 active:bg-violet-700 focus:ring-violet-300 ' onClick={handleSearch}>Search</button>
            </div>



            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className='bg-custom-navy text-white font-bold'> #</th>
                            <th className='bg-custom-navy text-white font-bold'> Image</th>
                            <th className='bg-custom-navy text-white font-bold'>Name</th>
                            <th className='bg-custom-navy text-white font-bold'>Toy Name</th>
                            <th className='bg-custom-navy text-white font-bold'>Sub-category
                            </th>
                            <th className='bg-custom-navy text-white font-bold'>Price</th>
                            <th className='bg-custom-navy text-white font-bold'>Available Quantity
                            </th>
                            <th className='bg-custom-navy text-white font-bold'>Details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.slice(0, limit).map((toy, index) => <AllToy
                                key={toy._id}
                                toy={toy}
                                index={index}></AllToy>)
                        }
                    </tbody>

                </table>

            </div>
            <div className='text-white flex justify-center items-center my-5'>
                {limit < toys.length && (
                    <button className='btn btn-primary' onClick={() => setLimit(limit + 20)}>Show More</button>
                )}
            </div>

            <Footer></Footer>

        </div>
    );
};

export default AllToys;