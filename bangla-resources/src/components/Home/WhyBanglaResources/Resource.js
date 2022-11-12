import React from 'react';
import { Col } from 'react-bootstrap';

const Resource = ({ resource }) => {
    const { name, img, description } = resource;
    return (
        <Col className='card-hover-effect'>
            <div className='d-flex gap-4 flex-nowrap align-items-between justify-content-center p-4 rounded' style={{ backgroundColor: '#E6F0F9' }}>
                <img src={img} alt={name} style={{ width: '50px', height: '50px', backgroundColor: 'white' }} className='d-inline p-1 rounded' />
                <div className='text-start'>
                    <p className='fs-5 fw-semibold'>{name}</p>
                    <p style={{textAlign: 'justify'}} className='m-0'>{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default Resource;