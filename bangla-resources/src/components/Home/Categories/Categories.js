import React from 'react';
import { Row } from 'react-bootstrap';
import useCategories from '../../../hooks/useCategories';
import Category from './Category';

const Categories = () => {
    const [categories] = useCategories();
    return (
        <div className='text-center bg-light m-0 p-5'>
            <h1 className='py-5 m-0'>টপ <span style={{color: '#04AA6D'}}>ক্যাটেগরীজ</span></h1>
            <Row xs={1} md={2} lg={4} className="g-4 m-0 pb-5 pt-4">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </Row>
        </div>
    );
};

export default Categories;