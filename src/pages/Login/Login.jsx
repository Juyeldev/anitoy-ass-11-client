import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProviders';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import log from '../../assets/ima.jpg'
import app from '../../firebase/firebase.config';
import { FaGoogle } from 'react-icons/fa';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import Swal from 'sweetalert2';



const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Password must contain at least one uppercase letter')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Password must contain at least two number')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters in your password')
            return;
        }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                Swal.fire({
                    title: 'Success',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Yes!'
                })
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
<Navbar/>
            <div className="hero min-h-screen my-8 w-full ">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        {/* <h1 className="text-5xl font-bold text-center my-8">Login now!</h1> */}
                        <div>
                            <img className='' src={log} alt="" />
                        </div>
                    </div>
                    <div className="card w-[400px] mb-8  shadow-2xl text-white bg-custom-navy">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>Already have an Account? <Link to='/register' className='text-primary'>Register</Link></small></p>

                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn btn-secondary"> <FaGoogle className='mr-2'/>  Google</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;