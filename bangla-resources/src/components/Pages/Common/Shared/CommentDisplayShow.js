import React from 'react';

const CommentDisplayShow = ({ singleComment }) => {
    const { comment, date, time } = singleComment;
    const arr = comment.split('\n');
    // console.log(arr);
    return (
        <div className='border p-2 rounded mb-2 px-3'>
            <div className='mb-1'>
                {
                    arr.map((a, index) => <p
                        className='mb-0'
                        key={index}
                    >{a}</p>)
                }
            </div>
            <p className='mb-0'><small>{date} - {time}</small></p>
        </div>
    );
};

export default CommentDisplayShow;