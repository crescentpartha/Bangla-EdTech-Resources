import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, img, total_courses, course_link } = category;
    return (
        <Col className='m-0 p-2'>
            <Card className='border-0 hoverEffect p-2' style={{ backgroundColor: '#E6F0F9' }}>
                <div className='rounded-circle' style={{ margin: '5% 35%', padding: '5%', backgroundColor: '#FFFFFF' }}>
                    <Card.Img variant="top" src={img} alt={name} style={{ width: '100%' }} className='d-block mx-auto m-0 img-fluid' />
                </div>
                <Card.Body>
                    <Card.Text className='fs-6 fw-semibold'>{name}</Card.Text>
                    {/* <Card.Text style={{color: '#04AA6D'}}>{total_courses}</Card.Text> */}
                    <Link style={{color: '#04AA6D', textDecoration: "none"}} to={course_link}>{total_courses}</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Category;