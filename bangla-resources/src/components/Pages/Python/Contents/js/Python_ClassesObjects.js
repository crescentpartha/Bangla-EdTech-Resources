import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';

const Python_ClassesObjects = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ক্লাস অবজেক্ট</h1> <br />
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="classes-objects"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="classes-objects"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_ClassesObjects;