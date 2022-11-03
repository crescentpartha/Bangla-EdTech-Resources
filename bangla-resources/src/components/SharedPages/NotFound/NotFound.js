import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='px-4 py-5 my-5'>
            <h1>পেজটি খুঁজে পাওয়া যায়নি!</h1>
            <div className='m-3'>
                <p className='m-0'>আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি!</p>
                <p className='m-1'>উপরের মেনুতে দেখানো যেকোন লিঙ্ক এ ক্লিক করে আপনি আপনার প্রয়োজনীয় পেজে যেতে পারেন।</p>
                <p className='m-0'>অথবা উপরের <span style={{ color: '#330662' }}>বাংলা রিসোর্স</span> লোগো তে ক্লিক করে ওয়েবসাইটের হোম পেজে যেতে পারেন।</p>
            </div>
            <Link to='/home' className='btn btn-success' type="Link">হোম পেজে চলুন</Link>
        </div>
    );
};

export default NotFound;