import React from 'react';
import useLearnCourses from '../../../hooks/useLearnCourses';
import DisplayCourses from './DisplayCourses';

const ChooseWhatToLearn = () => {
    const [courses] = useLearnCourses();
    return (
        <div className='d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center gap-5 px-5 pb-5 mx-5 mb-5'>
            <div className='text-start'>
                <h2 className='fs-3 m-0 pb-3'>কি শিখতে চান তা বেছে নিন</h2>
                <p className='m-0'>আপনার পছন্দের প্রোগ্রামিং ভাষা শেখা শুরু করুন।</p>
            </div>
            <div className='flex-grow-1 px-4 second-div'>
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-4'>
                    {
                        courses.map(course => <DisplayCourses
                            key={course.id}
                            course={course}
                        ></DisplayCourses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChooseWhatToLearn;