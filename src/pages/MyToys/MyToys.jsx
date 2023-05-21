import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import UpdateToy from './UpdateToy';
import MyToy from './MyToy';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [limit, setLimit] = useState(20);




    useEffect(() => {
        fetch(`https://assignment-11-server-ashy.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                setToys(result)
            })
    }, [user])
    const handleSortA=() => {
        fetch(`https://assignment-11-server-ashy.vercel.app/myToysA/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            setToys(result)
        })
    }
    const handleSortD=() => {
        fetch(`https://assignment-11-server-ashy.vercel.app/myToysD/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            setToys(result)
        })
    }




    return (
        <div>
            <Navbar/>
            <h2 className='text-6xl text-blue-600 font-bold text-center my-5'>My toys section</h2>

            <div className='flex justify-center items-center my-5'>
                <button onClick={handleSortA} className=' btn btn-primary mr-8'>Sort By ASC</button>
                <button className='btn btn-primary' onClick={handleSortD} >Sort By DSC</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th className='bg-custom-navy  font-bold'>
                                <label>
                                    <input type="checkbox" className="checkbox text-white" />
                                </label>
                            </th>
                            <th className='bg-custom-navy text-white font-bold'>Toy Name</th>
                            <th className='bg-custom-navy text-white font-bold'> Image</th>
                            <th className='bg-custom-navy text-white font-bold'>Price</th>
                            <th className='bg-custom-navy text-white font-bold'>Description</th>
                            <th className='bg-custom-navy text-white font-bold'> Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.slice(0, limit).map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></MyToy>)
                        }

                    </tbody>

                </table>
            </div>
            <div className='text-white flex justify-center items-center my-5'>
                {limit < toys.length && (
                    <button className='btn btn-primary' onClick={() => setLimit(limit + 20)}>Show More</button>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default MyToys;