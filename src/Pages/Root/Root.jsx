import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer className='w-full'></Footer>
        </div>
    );
};

export default Root;