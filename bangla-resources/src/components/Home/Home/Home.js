import React from 'react';
import { Row, Col } from 'react-bootstrap';
import programming_concept from '../../../images/programming-concept.jpg';
import Categories from '../Categories/Categories';
import Resources from '../WhyBanglaResources/Resources';

const Home = () => {
    return (
        <div>
            <div className='text-start p-5'>
                <Row xs={1} md={2} className="g-4 mx-5 d-flex align-items-center justify-content-between">
                    <Col>
                        <h2 className='m-0 pb-4'>কোডিং শিখুন বিনামুল্যে</h2>
                        <p className='m-0 pb-4'>আমাদের বিগিনার-ফ্রেন্ডলি টিউটোরিয়াল এবং উদাহরণ দিয়ে কোড করতে শিখুন। ইন্টারেক্টিভ টিউটোরিয়াল পড়ুন এবং প্রোগ্রামিং শিখতে আপনার কোড লিখুন এবং পরীক্ষা করুন।</p>
                        <h4 className='m-0 pb-4'>সর্বশেষ টিউটোরিয়াল এবং আপডেট পেতেঃ</h4>
                        <div className='d-flex justify-content-start'>
                            <input style={{ border: '1px solid #E1E1E1' }} className='py-1 px-2 w-75 rounded-start border-end-0 text-success' type="text" placeholder='ইমেইল লিখুন' />
                            <button style={{ backgroundColor: '#04AA6D' }} className='text-light p-2 btn rounded-end rounded-0'>সাবস্ক্রাইব!</button>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <img src={programming_concept} width='70%' alt="programming - slidesgo" />
                    </Col>
                </Row>
            </div>
            <Categories></Categories>
            <Resources></Resources>
        </div>
    );
};

export default Home;