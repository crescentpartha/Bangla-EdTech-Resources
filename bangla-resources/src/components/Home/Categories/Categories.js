import React from 'react';
import { Row } from 'react-bootstrap';
import useCategories from '../../../hooks/useCategories';
import Category from './Category';

const Categories = () => {
    const [categories] = useCategories();
    return (
        <div className='text-center bg-light m-0 p-5'>
            <h1 className='py-5'>টপ ক্যাটেগরীজ</h1>
            <Row xs={2} md={3} lg={4} className="g-4">
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