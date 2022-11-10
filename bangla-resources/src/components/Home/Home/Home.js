import React from 'react';
import { Row, Col } from 'react-bootstrap';
import programming_concept from '../../../images/programming-concept.jpg';

const Home = () => {
    return (
        <div className='text-start p-5'>
            <Row xs={1} md={2} className="g-4 mx-5 d-flex align-items-center justify-content-between">
                <Col>
                    <h2 className='pb-2'>কোড শিখুন বিনামুল্যে</h2>
                    <p>আমাদের বিগিনার-ফ্রেন্ডলি টিউটোরিয়াল এবং উদাহরণ দিয়ে কোড করতে শিখুন। ইন্টারেক্টিভ টিউটোরিয়াল পড়ুন এবং প্রোগ্রামিং শিখতে আপনার কোড লিখুন এবং পরীক্ষা করুন।</p>
                    <h4 className='pb-2'>সর্বশেষ টিউটোরিয়াল এবং আপডেট পানঃ</h4>
                    <div className='d-flex justify-content-start'>
                        <input className='p-1 w-75' type="text" placeholder='ইমেইল এর ঠিকানা লিখুন' />
                        <button className='text-light p-2 btn btn-success'>সাবস্ক্রাইব!</button>
                    </div>
                </Col>
                <Col className='text-center'>
                    <img src={programming_concept} width='70%' alt="programming - slidesgo" />
                </Col>
            </Row>
        </div>
    );
};

export default Home;