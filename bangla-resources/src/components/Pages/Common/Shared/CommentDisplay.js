import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CommentDisplayShow from './CommentDisplayShow';

const CommentDisplay = ({ tutorial, topic }) => {
    const [comments, setComments] = useState([]);
    // console.log(comments);

    useEffect(() => {
        fetch(`http://localhost:5000/topic-wise-comment?tutorial=${tutorial}&topic=${topic}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [tutorial, topic, comments]);

    return (
        <div className='mt-3'>
            <h2 className='fs-3' style={{color: '#04AA6D'}}>Comments</h2>
            <div>
                {
                    comments.map(comment => <CommentDisplayShow
                        key={comment._id}
                        singleComment={comment}
                    ></CommentDisplayShow>)
                }
            </div>
        </div>
    );
};

export default CommentDisplay;