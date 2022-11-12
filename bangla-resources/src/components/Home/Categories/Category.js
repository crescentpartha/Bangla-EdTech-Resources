import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = ({ category }) => {
    const { name, img, total_courses } = category;
    return (
        <Col className='m-0 p-2'>
            <Card className='border-0 hoverEffect p-2' style={{ backgroundColor: '#E6F0F9' }}>
                <div className='rounded-circle' style={{ margin: '5% 35%', padding: '20px', backgroundColor: '#FFFFFF' }}>
                    <Card.Img variant="top" src={img} alt={name} style={{ width: '100%' }} className='d-block mx-auto m-0' />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {name}
                    </Card.Text>
                    <Card.Text className='fs-4 fw-semibold'>
                        {total_courses}
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <div className='border-0 p-2' style={{ backgroundColor: '#E6F0F9' }}>
                <img variant="top" src={img} alt={name} style={{ width: '15%', backgroundColor: '#FFFFFF' }} className='d-block mx-auto rounded m-0 m-2' />
                <p>{name}</p>
                <p>{total_courses}</p>
            </div> */}
        </Col>
    );
};

export default Category;