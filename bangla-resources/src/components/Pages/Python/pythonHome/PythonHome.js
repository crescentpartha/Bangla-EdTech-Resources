import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../SharedPages/CustomLink/CustomLink';
import './PythonHome.css';

const PythonHome = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
            {/* <h2>Python Home</h2> */}
            <div className=' pt-3 bg-light position-sticky border-end' style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
                <nav className='navigation d-flex flex-column flex-wrap text-start'>
                    <h5 className='py-2 px-3 m-0 fw-semibold text-secondary'>পাইথন টিউটোরিয়াল</h5>
                    <CustomLink className=' py-1 px-3 d-block' to='introduction'>ভূমিকা</CustomLink>
                    <CustomLink className='py-1 px-3 d-block' to='getStarted'>এবার শুরু করা যাক</CustomLink>
                    <CustomLink className='py-1 px-3 d-block' to='syntax'>সিনট্যাক্স</CustomLink>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default PythonHome;