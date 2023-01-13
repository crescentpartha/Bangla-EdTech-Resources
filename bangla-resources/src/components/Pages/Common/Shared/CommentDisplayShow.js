import React from 'react';

const CommentDisplayShow = ({ singleComment }) => {
    const { comment, date, time } = singleComment;
    const arr = comment.split('\n');
    // console.log(arr);

    // Calculate the number of days of comments;
    const date_1 = new Date(`${date}`);
    const date_2 = new Date();
    const difference = Math.abs(date_1.getTime() - date_2.getTime());
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    // console.log(TotalDays);

    return (
        <div className='mb-3 p-3 shadow-sm rounded'>
            <div className='mb-1 border p-2 rounded'>
                {
                    arr.map((a, index) => <p
                        className='mb-0'
                        key={index}
                    >{a}</p>)
                }
            </div>
            <div className='d-flex justify-content-start align-items-center text-decoration-none'>
                <button
                    className='btn btn-light me-4'
                    style={{ padding: '1px 5px' }}
                >Delete</button>
                <p className='mb-0' title={`${date} at ${time}`}>
                    <small>
                        {TotalDays > 1 ? `${TotalDays}d` : 'Today'}
                    </small>
                </p>
            </div>
        </div>
    );
};

export default CommentDisplayShow;