import React from 'react';
import { Link } from 'react-router-dom';
import UpdateToy from './UpdateToy';
import Swal from 'sweetalert2';

const MyToy = ({ toy, toys, setToys, }) => {
    const { _id } = toy;


    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-juyeldev53-gmailcom.vercel.app/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining= toys.filter(deleteToy=> deleteToy._id!==_id);
                            setToys(remaining)
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>

            <td  className='font-bold' >{toy.toy_name}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircircle w-12 h-12">
                            <img src={toy.photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td  className='font-bold' >{toy.price} TK.</td>
            <td className='font-bold'  >{toy.description}</td>
            <th>
                <div className='flex justify-end items-end  w-1/2'>
                    <button className="btn btn-primary mr-2  "><Link to={`/updateToy/${_id}`}>Edit</Link></button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary ">Delete</button>

                </div>
            </th>

        </tr>
    );
};

export default MyToy;