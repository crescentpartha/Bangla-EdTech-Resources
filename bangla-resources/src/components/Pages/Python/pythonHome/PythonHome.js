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
                        <div>
                            <h5 className='py-2 px-3 m-0 fw-semibold text-secondary'>পাইথন টিউটোরিয়াল</h5>
                            <CustomLink className='py-1 px-3 d-block' to='python_introduction'>ভূমিকা</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_getStarted'>এবার শুরু করা যাক</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_syntax'>সিনট্যাক্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_comments'>কমেন্ট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_variables'>ভেরিয়েবল</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_datatypes'>ডাটা টাইপ্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_numbers'>নাম্বার</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_casting'>কাস্টিং</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_strings'>স্ট্রিং</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_booleans'>বুলিয়ানস</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_operators'>অপারেটর</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_lists'>লিস্ট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_tuples'>টাপল্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_sets'>সেট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_dictionaries'>ডিকশনারি</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_if-else'>ইফ এল্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_while-loops'>ওয়াইল লোপ</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_for-loops'>ফর লোপ</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_functions'>ফাংশন</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_lambda'>লেম্বডা</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_arrays'>অ্যারে</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_classes-objects'>ক্লাস অবজেক্ট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_inheritance'>ইনহেরিটেন্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_iterators'>ইটারেটর্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_scope'>স্কোপ</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_modules'>মডিউল</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_dates'>ডেইট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_math'>মেথ</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_json'>জেসন</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_reg-ex'>রেগুলার এক্সপ্রেশন্স</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_pip'>পিএইপি</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_try-except'>ট্রি এক্সসেপ্ট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_user-input'>ইউসার ইনপুট</CustomLink>
                            <CustomLink className='py-1 px-3 d-block' to='python_string-formatting'>স্ট্রিংস ফর্মেটিংস</CustomLink>
                        </div>
                    </nav>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default PythonHome;