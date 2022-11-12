import React from 'react';
import { Row } from 'react-bootstrap';
import useWhyBanglaResources from '../../../hooks/useWhyBanglaResources';
import Resource from './Resource';

const Resources = () => {
    const [resources] = useWhyBanglaResources();
    return (
        <div className='text-center m-0 p-5'>
            <h1 className='py-5 m-0'>কেন <span style={{color: '#04AA6D'}}>বাংলা রিসোর্স?</span></h1>
            <Row xs={1} md={2} lg={2} className="g-5 m-0 pb-5">
                {
                    resources.map(resource => <Resource
                        key={resource.id}
                        resource={resource}
                    ></Resource>)
                }
            </Row>
        </div>
    );
};

export default Resources;