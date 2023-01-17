import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';

const Python_RegEx = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন রেগুলার এক্সপ্রেশন্স</h1> <br />
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="regular-expression"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="regular-expression"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_RegEx;