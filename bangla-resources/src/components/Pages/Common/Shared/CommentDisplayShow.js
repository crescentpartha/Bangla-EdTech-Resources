import React, { useState } from 'react';
import CommentEditModal from './CommentEditModal';
import userIcon from '../../../../images/user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const CommentDisplayShow = ({ singleComment }) => {
    const { user, email, photoURL, comment, date, time } = singleComment;
    const [fireUser] = useAuthState(auth);
    const arr = comment.split('\n');
    // console.log(arr);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

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
            const url = `https://bangla-ed-tech-resources-server.vercel.app/topic-wise-comment/${id}?tutorial=${singleComment.tutorial}&topic=${singleComment.topic}`;
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
        <div className='mb-3 p-3 shadow-sm rounded d-flex flex-row justify-content-start align-items-start gap-2'>
            <div>
                {
                    photoURL ? <img className='rounded-circle' width="40px" src={photoURL} alt={user} />
                        : <img className='rounded-circle' width="40px" src={userIcon} alt='Icon' />
                }
            </div>
            <div>
                <div className='mb-1 border p-2 rounded'>
                    <p className='mb-1 fw-semibold' title="Username">{user}</p>
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
                        disabled={email !== fireUser?.email}
                    >Delete</button>

                    <button
                        onClick={handleShow}
                        className='btn btn-light me-4'
                        style={{ padding: '1px 5px' }}
                        disabled={email !== fireUser?.email}
                    >Edit</button>
                    {show && <CommentEditModal show={show} setShow={setShow} singleComment={singleComment}></CommentEditModal>}

                    <p className='mb-0' title={`${date} at ${time}`}>
                        <small>
                            {TotalDays > 1 ? `${TotalDays}d` : 'Today'}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommentDisplayShow;