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

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // console.log('Deleting comment with id = ', id);

            // delete a comment in client-side and send to the server-side
            const url = `http://localhost:5000/topic-wise-comment/${id}?tutorial=${singleComment.tutorial}&topic=${singleComment.topic}`;
            // console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data?.deletedCount);
            });
        }
    }

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
                    onClick={() => handleDelete(singleComment._id)}
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