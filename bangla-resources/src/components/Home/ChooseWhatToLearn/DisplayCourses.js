import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCourses = ({ course }) => {
    const { name, img, course_link } = course;
    return (
        <div className='rounded p-4 card-hover-effect' style={{ width: '120px', backgroundColor: '#E6F0F9' }}>
            <div className='d-block mx-auto' style={{ width: '60px', height: '60px' }}>
                <img variant="top" src={img} alt={name} style={{ width: '90%', height: '90%' }} className='' />
            </div>
            <Link className='py-2' style={{ color: '#04AA6D', textDecoration: "none" }} to={course_link}>{name}</Link>
        </div>
    );
};

export default DisplayCourses;