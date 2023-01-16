import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../SharedPages/CustomLink/CustomLink';
import PagesHeader from '../../Common/PagesHeader/PagesHeader';

const PythonHome = () => {
    return (
        <div>
            <PagesHeader></PagesHeader>
            <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
                <div className='pt-3 bg-light position-sticky border-end' style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
                    <nav className='home-hover d-flex flex-column flex-wrap text-start'>
                        <h5 className='py-2 px-3 m-0 fw-semibold text-secondary'>পাইথন টিউটোরিয়াল</h5>
                        <CustomLink className=' py-1 px-3 d-block' to='python_introduction'>ভূমিকা</CustomLink>
                        <CustomLink className='py-1 px-3 d-block' to='python_getStarted'>এবার শুরু করা যাক</CustomLink>
                        <CustomLink className='py-1 px-3 d-block' to='python_syntax'>সিনট্যাক্স</CustomLink>
                        <CustomLink className='py-1 px-3 d-block' to='python_comments'>কমেন্ট</CustomLink>
                        <CustomLink className='py-1 px-3 d-block' to='python_variables'>ভেরিয়েবল</CustomLink>
                    </nav>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default PythonHome;