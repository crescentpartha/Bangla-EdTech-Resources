import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';

const Python_Casting = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন কাস্টিং</h1> <br />
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="casting"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="casting"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Casting;