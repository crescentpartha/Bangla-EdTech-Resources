import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './PythonHome.css';

const PythonHome = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
            {/* <h2>Python Home</h2> */}
            <div className='navigation pt-3 bg-light position-sticky border-end' style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
                <nav className='d-flex flex-column flex-wrap text-start'>
                    <h5 className='py-2 px-3 m-0 fw-semibold text-secondary'>পাইথন টিউটোরিয়াল</h5>
                    <Link className='py-1 px-3 text-decoration-none text-dark' to='introduction'>ভূমিকা</Link>
                    <Link className='py-1 px-3 text-decoration-none text-dark' to='getStarted'>এবার শুরু করা যাক</Link>
                    <Link className='py-1 px-3 text-decoration-none text-dark' to='syntax'>সিনট্যাক্স</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default PythonHome;