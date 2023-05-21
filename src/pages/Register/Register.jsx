import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import log from '../../assets/ima2.jpg'
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/login'


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password, name);

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Password must contain at least one uppercase letter')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Password must contain at least One number')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters in your password')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Success',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Yes!'
                })
                setError('')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen w-full ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <div>
                            <img className='' src={log} alt="" />
                        </div>
                    </div>
                    <div className="card  w-[500px]  shadow-2xl bg-custom-navy">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Enter Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className=' text-white'><small>Already have an Account? <Link to='/login' className='text-primary'>Login</Link></small></p>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary"> Google</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;