import React from 'react';
import image from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-light p-4'>
            <p className='mt-3'>কপিরাইট &copy;{new Date().getFullYear()} <span style={{ color: '#330662' }}>বাংলা রিসোর্স</span>। সর্বস্বত্ব সংরক্ষিত।</p>
            <div>
                <img src={image} width='30px' alt="লগো" />
                <p style={{ color: '#330662' }}>বাংলা রিসোর্স</p>
            </div>
        </div>
    );
};

export default Footer;