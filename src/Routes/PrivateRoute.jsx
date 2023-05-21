import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center'><div>
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" /></div></div>
    }


    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;