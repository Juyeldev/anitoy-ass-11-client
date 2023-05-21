import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div >
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;